import { ModelInit, MutableModel, __modelMeta__, CustomIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerPlayer = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<Player, 'username'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly cognitoID: string;
  readonly name: string;
  readonly email: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPlayer = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<Player, 'username'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly cognitoID: string;
  readonly name: string;
  readonly email: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Player = LazyLoading extends LazyLoadingDisabled ? EagerPlayer : LazyPlayer

export declare const Player: (new (init: ModelInit<Player>) => Player) & {
  copyOf(source: Player, mutator: (draft: MutableModel<Player>) => MutableModel<Player> | void): Player;
}