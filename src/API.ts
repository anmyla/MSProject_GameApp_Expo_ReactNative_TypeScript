/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Game = {
  __typename: "Game",
  id: string,
  status: GameStatus,
  owners: Array< string >,
  initiator: string,
  turn: string,
  state: Array< Symbol | null >,
  winner?: string | null,
  createdAt: string,
  updatedAt: string,
  players?: ModelPlayerGameConnection | null,
};

export enum GameStatus {
  REQUESTED = "REQUESTED",
  DECLINED = "DECLINED",
  ACTIVE = "ACTIVE",
  FINISHED = "FINISHED",
  CANCELLED = "CANCELLED",
}


export enum Symbol {
  x = "x",
  o = "o",
}


export type ModelPlayerGameConnection = {
  __typename: "ModelPlayerGameConnection",
  items:  Array<PlayerGame | null >,
  nextToken?: string | null,
};

export type PlayerGame = {
  __typename: "PlayerGame",
  id: string,
  createdAt: string,
  gameID: string,
  playerUsername: string,
  owners: Array< string >,
  updatedAt: string,
  player: Player,
  game: Game,
};

export type Player = {
  __typename: "Player",
  id: string,
  cognitoID: string,
  username: string,
  name: string,
  email: string,
  createdAt: string,
  updatedAt: string,
  games?: ModelPlayerGameConnection | null,
  tokens?: ModelExpoTokenConnection | null,
};

export type ModelExpoTokenConnection = {
  __typename: "ModelExpoTokenConnection",
  items:  Array<ExpoToken | null >,
  nextToken?: string | null,
};

export type ExpoToken = {
  __typename: "ExpoToken",
  id: string,
  token: string,
  playerUsername: string,
  createdAt: string,
  updatedAt: string,
};

export type GameData = {
  __typename: "GameData",
  id: string,
  status: GameStatus,
  turn: string,
  state: Array< Symbol | null >,
  winner?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type SearchablePlayerConnection = {
  __typename: "SearchablePlayerConnection",
  items:  Array<Player | null >,
  nextToken?: string | null,
  total?: number | null,
};

export type onUpdateGameByIdSubscriptionVariables = {
  id: string,
};

export type onUpdateGameByIdSubscription = {
  onUpdateGameById?:  {
    __typename: "Game",
    id: string,
    status: GameStatus,
    turn: string,
    state: Array< Symbol | null >,
    winner?: string | null,
  } | null,
};

export type getGameQueryVariables = {
  id: string,
};

export type getGameQuery = {
  getGame?:  {
    __typename: "Game",
    id: string,
    status: GameStatus,
    owners: Array< string >,
    initiator: string,
    turn: string,
    state: Array< Symbol | null >,
    winner?: string | null,
    players?:  {
      __typename: "ModelPlayerGameConnection",
      items:  Array< {
        __typename: "PlayerGame",
        player:  {
          __typename: "Player",
          username: string,
          name: string,
        },
      } | null >,
    } | null,
  } | null,
};

export type startGameMutationVariables = {
  invitee: string,
};

export type startGameMutation = {
  startGame?:  {
    __typename: "GameData",
    id: string,
  } | null,
};

export type playMoveMutationVariables = {
  game: string,
  index: number,
};

export type playMoveMutation = {
  playMove?:  {
    __typename: "GameData",
    id: string,
    status: GameStatus,
    turn: string,
    state: Array< Symbol | null >,
    winner?: string | null,
  } | null,
};

export type GetPlayerQueryVariables = {
  username: string,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type GetPlayerQuery = {
  getPlayer?:  {
    __typename: "Player",
    id: string,
    games?:  {
      __typename: "ModelPlayerGameConnection",
      items:  Array< {
        __typename: "PlayerGame",
        game:  {
          __typename: "Game",
          id: string,
          initiator: string,
          owners: Array< string >,
          status: GameStatus,
          turn: string,
          winner?: string | null,
          players?:  {
            __typename: "ModelPlayerGameConnection",
            items:  Array< {
              __typename: "PlayerGame",
              player:  {
                __typename: "Player",
                name: string,
                username: string,
              },
            } | null >,
          } | null,
        },
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type searchPlayersQueryVariables = {
  limit?: number | null,
  nextToken?: string | null,
  searchString?: string | null,
};

export type searchPlayersQuery = {
  searchPlayers?:  {
    __typename: "SearchablePlayerConnection",
    items:  Array< {
      __typename: "Player",
      name: string,
      username: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};
