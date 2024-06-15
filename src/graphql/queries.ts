/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getPlayer = /* GraphQL */ `query GetPlayer($id: ID!) {
  getPlayer(id: $id) {
    id
    cognitoID
    username
    name
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetPlayerQueryVariables, APITypes.GetPlayerQuery>;
export const listPlayers = /* GraphQL */ `query ListPlayers(
  $filter: ModelPlayerFilterInput
  $limit: Int
  $nextToken: String
) {
  listPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
