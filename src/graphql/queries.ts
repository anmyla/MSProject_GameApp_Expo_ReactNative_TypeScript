/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getGameData = /* GraphQL */ `query GetGameData($id: ID!) {
  getGameData(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetGameDataQueryVariables,
  APITypes.GetGameDataQuery
>;
export const listGameDatas = /* GraphQL */ `query ListGameDatas(
  $filter: ModelGameDataFilterInput
  $limit: Int
  $nextToken: String
) {
  listGameDatas(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      status
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
` as GeneratedQuery<
  APITypes.ListGameDatasQueryVariables,
  APITypes.ListGameDatasQuery
>;
export const getPlayer = /* GraphQL */ `query GetPlayer($username: String!) {
  getPlayer(username: $username) {
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
      cognitoID
      username
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
export const getGame = /* GraphQL */ `query GetGame($id: ID!) {
  getGame(id: $id) {
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
export const getExpoToken = /* GraphQL */ `query GetExpoToken($token: String!) {
  getExpoToken(token: $token) {
    id
    token
    playerUsername
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetExpoTokenQueryVariables,
  APITypes.GetExpoTokenQuery
>;
export const listExpoTokens = /* GraphQL */ `query ListExpoTokens(
  $token: String
  $filter: ModelExpoTokenFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listExpoTokens(
    token: $token
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      token
      playerUsername
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListExpoTokensQueryVariables,
  APITypes.ListExpoTokensQuery
>;
export const getExpoTicketsObject = /* GraphQL */ `query GetExpoTicketsObject($id: ID!) {
  getExpoTicketsObject(id: $id) {
    id
    tickets
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetExpoTicketsObjectQueryVariables,
  APITypes.GetExpoTicketsObjectQuery
>;
export const listExpoTicketsObjects = /* GraphQL */ `query ListExpoTicketsObjects(
  $filter: ModelExpoTicketsObjectFilterInput
  $limit: Int
  $nextToken: String
) {
  listExpoTicketsObjects(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      tickets
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListExpoTicketsObjectsQueryVariables,
  APITypes.ListExpoTicketsObjectsQuery
>;
