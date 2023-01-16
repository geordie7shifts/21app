import { Theme } from "../../types/theme";

export enum Types {
  SET_THEME = "settings/set_theme",
}

type SetThemeAction = {
  type: Types.SET_THEME;
  theme: Theme;
};

export type SettingsAction = SetThemeAction;

const setTheme = (theme: Theme): SetThemeAction => {
  return {
    type: Types.SET_THEME,
    theme,
  };
};

export const actions = {
  setTheme,
};
