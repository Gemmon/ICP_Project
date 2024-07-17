import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface _SERVICE {
  'add_record' : ActorMethod<[string, string], undefined>,
  'clear_leaderboard' : ActorMethod<[], undefined>,
  'read_leaderboard' : ActorMethod<[], Array<Array<string>>>,
  'sort_leaderboard' : ActorMethod<[], undefined>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
