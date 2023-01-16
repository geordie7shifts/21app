import { Player } from "../../types/players";
import { PlayerAction, Types } from "../actions/playerActions";

export interface PlayerState {
  players: Player[];
}

const initialState = {
  players: [],
};

export const reducer = (
  state: PlayerState = initialState,
  action: PlayerAction
): PlayerState => {
  switch (action.type) {
    case Types.ADD_PLAYER:
      return {
        ...state,
        players: [...state.players, action.player],
      };

    case Types.REMOVE_PLAYER:
      return {
        ...state,
        players: state.players.filter((player) => player.id != action.playerId),
      };

    default:
      return state;
  }
};
