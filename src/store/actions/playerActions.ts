import { Player } from "../../types/players";

export enum Types {
  ADD_PLAYER = "players/add_player",
  REMOVE_PLAYER = "players/removePlayer",
}

type AddPlayerAction = {
  type: Types.ADD_PLAYER;
  player: Player;
};

type RemovePlayerAction = {
  type: Types.REMOVE_PLAYER;
  playerId: string;
};

export type PlayerAction = AddPlayerAction | RemovePlayerAction;

const addPlayer = (player: Player): AddPlayerAction => {
  return {
    type: Types.ADD_PLAYER,
    player,
  };
};

const removePlayer = (player: Player): RemovePlayerAction => {
  return {
    type: Types.REMOVE_PLAYER,
    playerId: player.id,
  };
};

export const actions = {
  addPlayer,
  removePlayer,
};
