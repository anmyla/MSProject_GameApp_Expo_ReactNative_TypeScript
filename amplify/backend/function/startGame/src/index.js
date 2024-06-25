/* Amplify Params - DO NOT EDIT
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

exports.handler = async (event) => {
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

    const initiator = event.identity.username;
    const invitee = event.arguments.invitee;

    //1. make sure initiator and invitee exists
    const playerQuery = gql`
        query getPlayer($username: String!){
            getPlayer(username: $username) {
                id
            }
        }
    `;

    const initiatorResponse = await graphqlClient.query({
        query: playerQuery,
        variables: {
            username: initiator
        }
    });

    const inviteeResponse = await graphqlClient.query({
        query: playerQuery,
        variables: {
            username: invitee
        }
    });

    console.log(initiatorResponse, inviteeResponse);

    if (!initiatorResponse.data.getPlayer || !inviteeResponse.data.getPlayer) {
        console.log("At least 1 player does not exist!");
        throw new Error("At least 1 player does not exist!");
    }

    if (initiatorResponse.data.getPlayer === inviteeResponse.data.getPlayer) {
        console.log("Initiator cannot invite self");
        throw new Error("Initiator cannot invite self");
    }

    //2. creating a new Game object
    const gameMutation = gql`
        mutation createGame(
        $status: GameStatus!
        $owners: [String!]!
        $initiator: String!
        $turn: String!
        $state: [Symbol]!
        ) {
          createGame(
            input: {status: $status, owners: $owners, initiator: $initiator, turn:  $turn, state: $state}
            condition: {}
        )   {
            id
            status        
            state
            turn
             winner
            }
        }
    `;
    const gameResponse = await graphqlClient.mutate({
        mutation: gameMutation,
        variables: {
            status: "REQUESTED",
            owners: [initiator, invitee],
            initiator: initiator,
            turn: Math.random() < 0.5 ? initiator : invitee,
            state: [null, null, null, null, null, null, null, null, null]
        }
    });

    console.log("GAME RESPONSE: " +  gameResponse);

    //3. Linking the Game with the players (by creating a playerGame model)
    //4. Push notifications to the invitee
    return {
        id: "12345",
        statu: "REQUESTED",
        turn: "mplayer1",
        winner: "mplayer2"
    }


}
