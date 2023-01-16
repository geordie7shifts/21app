import { Game, Series } from "../../types/games";
import { GameAction, Types } from "../actions/gameActions";

export interface GameState {
  games: Game[];
  series: Series[];
}

const initialState = {
  games: [],
  series: [],
} as GameState;

export const reducer = (
  state: GameState = initialState,
  action: GameAction
): GameState => {
  switch (action.type) {
    case Types.NEW_GAME:
      return {
        ...state,
        games: [...state.games, action.game],
      };

    case Types.RECORD_SHOT:
      return {
        ...state,
        games: state.games.map((game) => {
          let ng = { ...game };
          if (game.id == action.gameId) {
            ng.log = [...game.log, action.shot];
          }
          return ng;
        }),
      };

    case Types.UNDO_SHOT:
      return {
        ...state,
        games: state.games.map((game) => {
          let ng = { ...game };
          if (game.id == action.gameId) {
            let shot = ng.log.pop();

            ng.scores.find(
              (score) => score.player.id == shot.player.id
            ).score += shot.value * -1;
          }
          return ng;
        }),
      };

    default:
      return state;
  }
};
