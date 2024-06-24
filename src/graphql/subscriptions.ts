/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateGame = /* GraphQL */ `subscription OnCreateGame {
  onCreateGame {
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
` as GeneratedSubscription<
  APITypes.OnCreateGameSubscriptionVariables,
  APITypes.OnCreateGameSubscription
>;
export const onUpdateGame = /* GraphQL */ `subscription OnUpdateGame {
  onUpdateGame {
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
` as GeneratedSubscription<
  APITypes.OnUpdateGameSubscriptionVariables,
  APITypes.OnUpdateGameSubscription
>;
export const onDeleteGame = /* GraphQL */ `subscription OnDeleteGame {
  onDeleteGame {
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
` as GeneratedSubscription<
  APITypes.OnDeleteGameSubscriptionVariables,
  APITypes.OnDeleteGameSubscription
>;
export const onCreatePlayerGame = /* GraphQL */ `subscription OnCreatePlayerGame {
  onCreatePlayerGame {
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
` as GeneratedSubscription<
  APITypes.OnCreatePlayerGameSubscriptionVariables,
  APITypes.OnCreatePlayerGameSubscription
>;
export const onUpdatePlayerGame = /* GraphQL */ `subscription OnUpdatePlayerGame {
  onUpdatePlayerGame {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePlayerGameSubscriptionVariables,
  APITypes.OnUpdatePlayerGameSubscription
>;
export const onDeletePlayerGame = /* GraphQL */ `subscription OnDeletePlayerGame {
  onDeletePlayerGame {
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
` as GeneratedSubscription<
  APITypes.OnDeletePlayerGameSubscriptionVariables,
  APITypes.OnDeletePlayerGameSubscription
>;
export const onCreatePlayer = /* GraphQL */ `subscription OnCreatePlayer {
  onCreatePlayer {
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
    games {
      nextToken
      __typename
    }
    createdAt
    updatedAt
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
    games {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePlayerSubscriptionVariables,
  APITypes.OnDeletePlayerSubscription
>;
