/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onUpdateGameById = /* GraphQL */ `subscription OnUpdateGameById($id: ID!) {
  onUpdateGameById(id: $id) {
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
  APITypes.OnUpdateGameByIdSubscriptionVariables,
  APITypes.OnUpdateGameByIdSubscription
>;
export const onCreateGameData = /* GraphQL */ `subscription OnCreateGameData {
  onCreateGameData {
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
` as GeneratedSubscription<
  APITypes.OnCreateGameDataSubscriptionVariables,
  APITypes.OnCreateGameDataSubscription
>;
export const onUpdateGameData = /* GraphQL */ `subscription OnUpdateGameData {
  onUpdateGameData {
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
` as GeneratedSubscription<
  APITypes.OnUpdateGameDataSubscriptionVariables,
  APITypes.OnUpdateGameDataSubscription
>;
export const onDeleteGameData = /* GraphQL */ `subscription OnDeleteGameData {
  onDeleteGameData {
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
` as GeneratedSubscription<
  APITypes.OnDeleteGameDataSubscriptionVariables,
  APITypes.OnDeleteGameDataSubscription
>;
export const onCreatePlayer = /* GraphQL */ `subscription OnCreatePlayer {
  onCreatePlayer {
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
` as GeneratedSubscription<
  APITypes.OnCreatePlayerSubscriptionVariables,
  APITypes.OnCreatePlayerSubscription
>;
export const onUpdatePlayer = /* GraphQL */ `subscription OnUpdatePlayer {
  onUpdatePlayer {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePlayerSubscriptionVariables,
  APITypes.OnUpdatePlayerSubscription
>;
export const onDeletePlayer = /* GraphQL */ `subscription OnDeletePlayer {
  onDeletePlayer {
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
` as GeneratedSubscription<
  APITypes.OnDeletePlayerSubscriptionVariables,
  APITypes.OnDeletePlayerSubscription
>;
export const onCreatePlayerGame = /* GraphQL */ `subscription OnCreatePlayerGame {
  onCreatePlayerGame {
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
` as GeneratedSubscription<
  APITypes.OnDeletePlayerGameSubscriptionVariables,
  APITypes.OnDeletePlayerGameSubscription
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
export const onCreateExpoToken = /* GraphQL */ `subscription OnCreateExpoToken($playerUsername: String) {
  onCreateExpoToken(playerUsername: $playerUsername) {
    id
    token
    playerUsername
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateExpoTokenSubscriptionVariables,
  APITypes.OnCreateExpoTokenSubscription
>;
export const onUpdateExpoToken = /* GraphQL */ `subscription OnUpdateExpoToken($playerUsername: String) {
  onUpdateExpoToken(playerUsername: $playerUsername) {
    id
    token
    playerUsername
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateExpoTokenSubscriptionVariables,
  APITypes.OnUpdateExpoTokenSubscription
>;
export const onDeleteExpoToken = /* GraphQL */ `subscription OnDeleteExpoToken($playerUsername: String) {
  onDeleteExpoToken(playerUsername: $playerUsername) {
    id
    token
    playerUsername
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteExpoTokenSubscriptionVariables,
  APITypes.OnDeleteExpoTokenSubscription
>;
export const onCreateExpoTicketsObject = /* GraphQL */ `subscription OnCreateExpoTicketsObject {
  onCreateExpoTicketsObject {
    id
    tickets
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateExpoTicketsObjectSubscriptionVariables,
  APITypes.OnCreateExpoTicketsObjectSubscription
>;
export const onUpdateExpoTicketsObject = /* GraphQL */ `subscription OnUpdateExpoTicketsObject {
  onUpdateExpoTicketsObject {
    id
    tickets
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateExpoTicketsObjectSubscriptionVariables,
  APITypes.OnUpdateExpoTicketsObjectSubscription
>;
export const onDeleteExpoTicketsObject = /* GraphQL */ `subscription OnDeleteExpoTicketsObject {
  onDeleteExpoTicketsObject {
    id
    tickets
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteExpoTicketsObjectSubscriptionVariables,
  APITypes.OnDeleteExpoTicketsObjectSubscription
>;
