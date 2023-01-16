import { themes } from "../../styles/themes";
import { Theme } from "../../types/theme";
import { mapToTheme } from "../../utils/themeUtils";
import { SettingsAction, Types } from "../actions/settingsActions";

export interface SettingsState {
  theme: Theme;
}

const initialState: SettingsState = {
  theme: mapToTheme(themes[1]),
};

export const reducer = (
  state: SettingsState = initialState,
  action: SettingsAction
): SettingsState => {
  switch (action.type) {
    case Types.SET_THEME:
      return {
        ...state,
        theme: action.theme,
      };

    default:
      return state;
  }
};
