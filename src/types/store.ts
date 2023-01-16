import { GameState } from "../store/reducers/gameReducer";
import { PlayerState } from "../store/reducers/playerReducer";
import { SettingsState } from "../store/reducers/settingsReducer";

export interface RootState {
  games: GameState;
  players: PlayerState;
  settings: SettingsState;
}
