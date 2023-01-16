import { Game, GameState } from "../types/games";
import { Player } from "../types/players";

export const getNewGame = (players: Player[], seriesId?: string): Game => {
  return {
    id: "",
    state: GameState.Ready,
    date: new Date().toUTCString(),
    log: [],
    players,
    scores: players.map((player) => {
      return {
        ice: true,
        player,
        score: 0,
      };
    }),
    seriesId: seriesId,
  };
};
