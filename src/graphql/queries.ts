/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getGame = /* GraphQL */ `query GetGame($id: ID!) {
  getGame(id: $id) {
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
` as GeneratedQuery<APITypes.GetGameQueryVariables, APITypes.GetGameQuery>;
export const listGames = /* GraphQL */ `query ListGames(
  $filter: ModelGameFilterInput
  $limit: Int
  $nextToken: String
) {
  listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListGamesQueryVariables, APITypes.ListGamesQuery>;
export const getPlayer = /* GraphQL */ `query GetPlayer($username: String!) {
  getPlayer(username: $username) {
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
` as GeneratedQuery<APITypes.GetPlayerQueryVariables, APITypes.GetPlayerQuery>;
export const listPlayers = /* GraphQL */ `query ListPlayers(
  $username: String
  $filter: ModelPlayerFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listPlayers(
    username: $username
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      username
      cognitoID
      name
      email
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPlayersQueryVariables,
  APITypes.ListPlayersQuery
>;
