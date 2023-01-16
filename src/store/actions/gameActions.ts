import { Game, Shot } from "../../types/games";

export enum Types {
  NEW_GAME = "games/new_game",
  RECORD_SHOT = "games/record_shot",
  UNDO_SHOT = "games/undo_shot",
}

type NewGameAction = {
  type: Types.NEW_GAME;
  game: Game;
};

type RecordShotAction = {
  type: Types.RECORD_SHOT;
  gameId: string;
  shot: Shot;
};

type UndoShotAction = {
  type: Types.UNDO_SHOT;
  gameId: string;
};

export type GameAction = NewGameAction | RecordShotAction | UndoShotAction;

const addGame = (game: Game): NewGameAction => {
  return {
    type: Types.NEW_GAME,
    game,
  };
};

const recordShot = (gameId: string, shot: Shot): RecordShotAction => {
  return {
    type: Types.RECORD_SHOT,
    gameId,
    shot,
  };
};

const undoShot = (gameId: string): UndoShotAction => {
  return {
    type: Types.UNDO_SHOT,
    gameId,
  };
};

export const actions = {
  addGame,
  recordShot,
  undoShot,
};
