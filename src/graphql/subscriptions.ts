/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreatePlayer = /* GraphQL */ `subscription OnCreatePlayer {
  onCreatePlayer {
    id
    username
    cognitoID
    name
    email
    createdAt
    updatedAt
    games {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePlayerSubscriptionVariables,
  APITypes.OnCreatePlayerSubscription
>;
export const onUpdatePlayer = /* GraphQL */ `subscription OnUpdatePlayer {
  onUpdatePlayer {
    id
    username
    cognitoID
    name
    email
    createdAt
    updatedAt
    games {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePlayerSubscriptionVariables,
  APITypes.OnUpdatePlayerSubscription
>;
export const onDeletePlayer = /* GraphQL */ `subscription OnDeletePlayer {
  onDeletePlayer {
    id
    username
    cognitoID
    name
    email
    createdAt
    updatedAt
    games {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePlayerSubscriptionVariables,
  APITypes.OnDeletePlayerSubscription
>;
export const onCreateGame = /* GraphQL */ `subscription OnCreateGame($owners: String) {
  onCreateGame(owners: $owners) {
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
` as GeneratedSubscription<
  APITypes.OnCreateGameSubscriptionVariables,
  APITypes.OnCreateGameSubscription
>;
export const onUpdateGame = /* GraphQL */ `subscription OnUpdateGame($owners: String) {
  onUpdateGame(owners: $owners) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateGameSubscriptionVariables,
  APITypes.OnUpdateGameSubscription
>;
export const onDeleteGame = /* GraphQL */ `subscription OnDeleteGame($owners: String) {
  onDeleteGame(owners: $owners) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteGameSubscriptionVariables,
  APITypes.OnDeleteGameSubscription
>;
export const onCreatePlayerGame = /* GraphQL */ `subscription OnCreatePlayerGame($owners: String) {
  onCreatePlayerGame(owners: $owners) {
    id
    createdAt
    gameID
    playerUsername
    owners
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
` as GeneratedSubscription<
  APITypes.OnCreatePlayerGameSubscriptionVariables,
  APITypes.OnCreatePlayerGameSubscription
>;
export const onUpdatePlayerGame = /* GraphQL */ `subscription OnUpdatePlayerGame($owners: String) {
  onUpdatePlayerGame(owners: $owners) {
    id
    createdAt
    gameID
    playerUsername
    owners
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
` as GeneratedSubscription<
  APITypes.OnUpdatePlayerGameSubscriptionVariables,
  APITypes.OnUpdatePlayerGameSubscription
>;
export const onDeletePlayerGame = /* GraphQL */ `subscription OnDeletePlayerGame($owners: String) {
  onDeletePlayerGame(owners: $owners) {
    id
    createdAt
    gameID
    playerUsername
    owners
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
` as GeneratedSubscription<
  APITypes.OnDeletePlayerGameSubscriptionVariables,
  APITypes.OnDeletePlayerGameSubscription
>;
