import { Screens } from "../../types/screens";
import { Theme } from "../../types/theme";

export enum Types {
  SET_THEME = "settings/set_theme",
  SET_SCREEN = "settings/set_screen",
  PREV_SCREEN = "settings/prev_screen",
  SET_HEADER_TEXT = "settings/set_header_text",
}

type SetThemeAction = {
  type: Types.SET_THEME;
  theme: Theme;
};

type SetScreenAction = {
  type: Types.SET_SCREEN;
  screen: Screens;
};

type SetHeaderAction = {
  type: Types.SET_HEADER_TEXT;
  text: string;
};

type PreviousScreenAction = {
  type: Types.PREV_SCREEN;
};

export type SettingsAction =
  | SetThemeAction
  | SetScreenAction
  | SetHeaderAction
  | PreviousScreenAction;

const setTheme = (theme: Theme): SetThemeAction => {
  return {
    type: Types.SET_THEME,
    theme,
  };
};

const setScreen = (screen: Screens): SetScreenAction => {
  return {
    type: Types.SET_SCREEN,
    screen,
  };
};

const previousScreen = () => {
  return {
    type: Types.PREV_SCREEN,
  };
};

const setHeaderText = (text: string): SetHeaderAction => {
  return {
    type: Types.SET_HEADER_TEXT,
    text,
  };
};

export const actions = {
  setTheme,
  setScreen,
  previousScreen,
  setHeaderText,
};
