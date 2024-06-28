/* Amplify Params - DO NOT EDIT
	API_TICTACTOE_GRAPHQLAPIENDPOINTOUTPUT
	API_TICTACTOE_GRAPHQLAPIIDOUTPUT
	API_TICTACTOE_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT *//* Amplify Params - DO NOT EDIT
    API_TICTACTOE_GRAPHQLAPIENDPOINTOUTPUT
    API_TICTACTOE_GRAPHQLAPIIDOUTPUT
    API_TICTACTOE_GRAPHQLAPIKEYOUTPUT
    ENV
    REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const appsync = require("aws-appsync");
const gql = require("graphql-tag");
require("cross-fetch/polyfill");
const isTerminal = require("./isTerminal");

const getGame = gql`
    query getGame($id: ID!) {
        getGame(id: $id) {
            id
            turn
            state
            status
            winner
            owners
            initiator
        }
    }
`;

const updateGame = gql`
    mutation updateGame(
        $id: ID!
        $turn: String!
        $winner: String
        $status: GameStatus!
        $state: [Symbol]!
        $player: String!
    ) {
        updateGame(
            input: { id: $id, turn: $turn, winner: $winner, status: $status, state: $state }
            condition: { turn: { eq: $player } }
        ) {
            id
            turn
            state
            status
            winner
        }
    }
`;

exports.handler = async event => {
    const graphqlClient = new appsync.AWSAppSyncClient({
        url: process.env.API_TICTACTOE_GRAPHQLAPIENDPOINTOUTPUT,
        region: process.env.REGION,
        auth: {
            type: "AWS_IAM",
            credentials: {
                accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                sessionToken: process.env.AWS_SESSION_TOKEN
            }
        },
        disableOffline: true
    });

    const player = event.identity.username;
    const gameID = event.identity.game;
    const index = event.identity.index;
    console.log(player, gameID, index);

    //Get Game Object using id and make sure it exits
    const gameResponse = await graphqlClient.query({
        query: getGame,
        variables: {
            id: gameID
        }
    });
    const game = gameResponse.data.getGame;
    if (!game) {
        throw new Error("Game not found!");
    };

    //Make sure Game is active
    if (game.status !== "REQUESTED" && game.status !== "ACTIVE") {
        console.log("Game is not active!");
        throw new Error("Game is not active!");
    };


    //Check that the current user is a participant in th game and that it is her turn
    if (!game.owners.includes(player)) {
        console.log("Logged in player is not participating in this game!");
        throw new Error("Logged in player is not participating in this game!");
    }
    if (game.turn !== player) {
        console.log("It's not your turn");
        throw new Error("It's not your turn");
    }

    //Make sire that the index is valid(not > than 8 and is empty)
    if (index > 8 || game.state[index]) {
        console.log("Invalid index or cell is already occupied!");
        throw new Error("Invalid index or cell is already occupied!");
    }

    //Update state, checkif the move is a terminal one and update the winner, status, turn, and state
    const symbol = player === game.initiator ? "x" : "o";
    const nextTurn = game.owners.find(p => p !== game.turn);
    const invitee = game.owners.find(p => p !== game.initiator);
    const newState = [...game.state];
    newState[index] = symbol;
    let newStatus = "ACTIVE";
    let newWinner = null;

    const terminalState = isTerminal(newState);
    if (terminalState) {
        newStatus = "FINISHED";
        if (terminalState.winner === "x") {
            newWinner = game.initiator;
        }
        if (terminalState.winner === "o") {
            newWinner = invitee;
        }
    }

    const updateGameResponse = await graphqlClient.mutate({
        mutation: updateGame,
        variables: {
            id: gameID,
            turn: nextTurn,
            winner: newWinner,
            status: newStatus,
            state: newState,
            player: player
        }
    });

    //Return the updated game
    return updateGameResponse.data.updateGame;

};
