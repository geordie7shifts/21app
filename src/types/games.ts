import { Player } from "./players";

enum ShotType {
  FreeThrow,
  Rebound,
}

enum ShotResult {
  Score,
  Swish,
  Miss,
  Airball,
}

export interface Score {
  player: Player;
  ice: boolean;
  score: number;
}

export interface Shot {
  id: string;
  player: Player;
  value: number; // value of shot - rebound: 1, free-throw: 2, airball: -1
  score: number; // score AFTER SHOT
  type: ShotType;
  result: ShotResult;
}

export enum GameState {
  Ready,
  InProgress,
  Finished,
}

export interface Game {
  id: string;
  state: GameState;
  seriesId?: string;
  date: string;
  players: Player[];
  scores: Score[];
  log: Shot[];
  winner?: Player;
}

export interface Series {
  bestOf: number;
  players: Player[];
  games: Game[];
  winner?: Player;
}
