/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

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
    players {
      nextToken
      __typename
    }
    createdAt
    updatedAt
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
    players {
      nextToken
      __typename
    }
    createdAt
    updatedAt
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
    players {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteGameMutationVariables,
  APITypes.DeleteGameMutation
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
    updatedAt
    player {
      id
      username
      cognitoID
      name
      email
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
    updatedAt
    player {
      id
      username
      cognitoID
      name
      email
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
    updatedAt
    player {
      id
      username
      cognitoID
      name
      email
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
export const createPlayer = /* GraphQL */ `mutation CreatePlayer(
  $input: CreatePlayerInput!
  $condition: ModelPlayerConditionInput
) {
  createPlayer(input: $input, condition: $condition) {
    id
    username
    cognitoID
    name
    email
    games {
      nextToken
      __typename
    }
    createdAt
    updatedAt
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
    username
    cognitoID
    name
    email
    games {
      nextToken
      __typename
    }
    createdAt
    updatedAt
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
    username
    cognitoID
    name
    email
    games {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePlayerMutationVariables,
  APITypes.DeletePlayerMutation
>;
