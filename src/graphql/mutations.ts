/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../../amplify/backend/function/addExpoToken/src/src/API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const startGame = /* GraphQL */ `mutation StartGame($invitee: String!) {
  startGame(invitee: $invitee) {
    id
    status
    turn
    state
    winner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.StartGameMutationVariables,
  APITypes.StartGameMutation
>;
export const playMove = /* GraphQL */ `mutation PlayMove($game: ID!, $index: Int!) {
  playMove(game: $game, index: $index) {
    id
    status
    turn
    state
    winner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.PlayMoveMutationVariables,
  APITypes.PlayMoveMutation
>;
export const addExpoToken = /* GraphQL */ `mutation AddExpoToken($token: String!) {
  addExpoToken(token: $token) {
    id
    token
    playerUsername
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.AddExpoTokenMutationVariables,
  APITypes.AddExpoTokenMutation
>;
export const createGameData = /* GraphQL */ `mutation CreateGameData(
  $input: CreateGameDataInput!
  $condition: ModelGameDataConditionInput
) {
  createGameData(input: $input, condition: $condition) {
    id
    status
    turn
    state
    winner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateGameDataMutationVariables,
  APITypes.CreateGameDataMutation
>;
export const updateGameData = /* GraphQL */ `mutation UpdateGameData(
  $input: UpdateGameDataInput!
  $condition: ModelGameDataConditionInput
) {
  updateGameData(input: $input, condition: $condition) {
    id
    status
    turn
    state
    winner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateGameDataMutationVariables,
  APITypes.UpdateGameDataMutation
>;
export const deleteGameData = /* GraphQL */ `mutation DeleteGameData(
  $input: DeleteGameDataInput!
  $condition: ModelGameDataConditionInput
) {
  deleteGameData(input: $input, condition: $condition) {
    id
    status
    turn
    state
    winner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteGameDataMutationVariables,
  APITypes.DeleteGameDataMutation
>;
export const createPlayer = /* GraphQL */ `mutation CreatePlayer(
  $input: CreatePlayerInput!
  $condition: ModelPlayerConditionInput
) {
  createPlayer(input: $input, condition: $condition) {
    id
    cognitoID
    username
    name
    email
    createdAt
    updatedAt
    games {
      nextToken
      __typename
    }
    tokens {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePlayerMutationVariables,
  APITypes.CreatePlayerMutation
>;
export const updatePlayer = /* GraphQL */ `mutation UpdatePlayer(
  $input: UpdatePlayerInput!
  $condition: ModelPlayerConditionInput
) {
  updatePlayer(input: $input, condition: $condition) {
    id
    cognitoID
    username
    name
    email
    createdAt
    updatedAt
    games {
      nextToken
      __typename
    }
    tokens {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePlayerMutationVariables,
  APITypes.UpdatePlayerMutation
>;
export const deletePlayer = /* GraphQL */ `mutation DeletePlayer(
  $input: DeletePlayerInput!
  $condition: ModelPlayerConditionInput
) {
  deletePlayer(input: $input, condition: $condition) {
    id
    cognitoID
    username
    name
    email
    createdAt
    updatedAt
    games {
      nextToken
      __typename
    }
    tokens {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePlayerMutationVariables,
  APITypes.DeletePlayerMutation
>;
export const createPlayerGame = /* GraphQL */ `mutation CreatePlayerGame(
  $input: CreatePlayerGameInput!
  $condition: ModelPlayerGameConditionInput
) {
  createPlayerGame(input: $input, condition: $condition) {
    id
    createdAt
    gameID
    playerUsername
    owners
    updatedAt
    player {
      id
      cognitoID
      username
      name
      email
      createdAt
      updatedAt
      __typename
    }
    game {
      id
      status
      owners
      initiator
      turn
      state
      winner
      createdAt
      updatedAt
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePlayerGameMutationVariables,
  APITypes.CreatePlayerGameMutation
>;
export const updatePlayerGame = /* GraphQL */ `mutation UpdatePlayerGame(
  $input: UpdatePlayerGameInput!
  $condition: ModelPlayerGameConditionInput
) {
  updatePlayerGame(input: $input, condition: $condition) {
    id
    createdAt
    gameID
    playerUsername
    owners
    updatedAt
    player {
      id
      cognitoID
      username
      name
      email
      createdAt
      updatedAt
      __typename
    }
    game {
      id
      status
      owners
      initiator
      turn
      state
      winner
      createdAt
      updatedAt
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePlayerGameMutationVariables,
  APITypes.UpdatePlayerGameMutation
>;
export const deletePlayerGame = /* GraphQL */ `mutation DeletePlayerGame(
  $input: DeletePlayerGameInput!
  $condition: ModelPlayerGameConditionInput
) {
  deletePlayerGame(input: $input, condition: $condition) {
    id
    createdAt
    gameID
    playerUsername
    owners
    updatedAt
    player {
      id
      cognitoID
      username
      name
      email
      createdAt
      updatedAt
      __typename
    }
    game {
      id
      status
      owners
      initiator
      turn
      state
      winner
      createdAt
      updatedAt
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePlayerGameMutationVariables,
  APITypes.DeletePlayerGameMutation
>;
export const createGame = /* GraphQL */ `mutation CreateGame(
  $input: CreateGameInput!
  $condition: ModelGameConditionInput
) {
  createGame(input: $input, condition: $condition) {
    id
    status
    owners
    initiator
    turn
    state
    winner
    createdAt
    updatedAt
    players {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateGameMutationVariables,
  APITypes.CreateGameMutation
>;
export const updateGame = /* GraphQL */ `mutation UpdateGame(
  $input: UpdateGameInput!
  $condition: ModelGameConditionInput
) {
  updateGame(input: $input, condition: $condition) {
    id
    status
    owners
    initiator
    turn
    state
    winner
    createdAt
    updatedAt
    players {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateGameMutationVariables,
  APITypes.UpdateGameMutation
>;
export const deleteGame = /* GraphQL */ `mutation DeleteGame(
  $input: DeleteGameInput!
  $condition: ModelGameConditionInput
) {
  deleteGame(input: $input, condition: $condition) {
    id
    status
    owners
    initiator
    turn
    state
    winner
    createdAt
    updatedAt
    players {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteGameMutationVariables,
  APITypes.DeleteGameMutation
>;
export const createExpoToken = /* GraphQL */ `mutation CreateExpoToken(
  $input: CreateExpoTokenInput!
  $condition: ModelExpoTokenConditionInput
) {
  createExpoToken(input: $input, condition: $condition) {
    id
    token
    playerUsername
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateExpoTokenMutationVariables,
  APITypes.CreateExpoTokenMutation
>;
export const updateExpoToken = /* GraphQL */ `mutation UpdateExpoToken(
  $input: UpdateExpoTokenInput!
  $condition: ModelExpoTokenConditionInput
) {
  updateExpoToken(input: $input, condition: $condition) {
    id
    token
    playerUsername
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateExpoTokenMutationVariables,
  APITypes.UpdateExpoTokenMutation
>;
export const deleteExpoToken = /* GraphQL */ `mutation DeleteExpoToken(
  $input: DeleteExpoTokenInput!
  $condition: ModelExpoTokenConditionInput
) {
  deleteExpoToken(input: $input, condition: $condition) {
    id
    token
    playerUsername
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteExpoTokenMutationVariables,
  APITypes.DeleteExpoTokenMutation
>;
export const createExpoTicketsObject = /* GraphQL */ `mutation CreateExpoTicketsObject(
  $input: CreateExpoTicketsObjectInput!
  $condition: ModelExpoTicketsObjectConditionInput
) {
  createExpoTicketsObject(input: $input, condition: $condition) {
    id
    tickets
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateExpoTicketsObjectMutationVariables,
  APITypes.CreateExpoTicketsObjectMutation
>;
export const updateExpoTicketsObject = /* GraphQL */ `mutation UpdateExpoTicketsObject(
  $input: UpdateExpoTicketsObjectInput!
  $condition: ModelExpoTicketsObjectConditionInput
) {
  updateExpoTicketsObject(input: $input, condition: $condition) {
    id
    tickets
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateExpoTicketsObjectMutationVariables,
  APITypes.UpdateExpoTicketsObjectMutation
>;
export const deleteExpoTicketsObject = /* GraphQL */ `mutation DeleteExpoTicketsObject(
  $input: DeleteExpoTicketsObjectInput!
  $condition: ModelExpoTicketsObjectConditionInput
) {
  deleteExpoTicketsObject(input: $input, condition: $condition) {
    id
    tickets
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteExpoTicketsObjectMutationVariables,
  APITypes.DeleteExpoTicketsObjectMutation
>;
