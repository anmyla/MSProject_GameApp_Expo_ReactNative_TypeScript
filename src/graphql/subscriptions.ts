/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreatePlayer = /* GraphQL */ `subscription OnCreatePlayer($filter: ModelSubscriptionPlayerFilterInput) {
  onCreatePlayer(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePlayerSubscriptionVariables,
  APITypes.OnCreatePlayerSubscription
>;
export const onUpdatePlayer = /* GraphQL */ `subscription OnUpdatePlayer($filter: ModelSubscriptionPlayerFilterInput) {
  onUpdatePlayer(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePlayerSubscriptionVariables,
  APITypes.OnUpdatePlayerSubscription
>;
export const onDeletePlayer = /* GraphQL */ `subscription OnDeletePlayer($filter: ModelSubscriptionPlayerFilterInput) {
  onDeletePlayer(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePlayerSubscriptionVariables,
  APITypes.OnDeletePlayerSubscription
>;
