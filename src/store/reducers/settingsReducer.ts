import { themes } from "../../styles/themes";
import { Screens } from "../../types/screens";
import { Theme } from "../../types/theme";
import { mapToTheme } from "../../utils/themeUtils";
import { SettingsAction, Types } from "../actions/settingsActions";

export interface SettingsState {
  theme: Theme;
  screenHistory: Screens[];
  headerText: string;
}

const initialState: SettingsState = {
  theme: mapToTheme(themes[1]),
  screenHistory: [Screens.Dashboard],
  headerText: "Dashboard",
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

    case Types.SET_SCREEN:
      return {
        ...state,
        screenHistory: [...state.screenHistory, action.screen],
      };

    case Types.SET_HEADER_TEXT:
      return {
        ...state,
        headerText: action.text,
      };

    case Types.PREV_SCREEN: {
      console.log("going to previous screen");
      if (state.screenHistory.length == 1) return state;
      let temp = [...state.screenHistory];
      temp.pop();
      return {
        ...state,
        screenHistory: temp,
      };
    }

    default:
      return state;
  }
};
