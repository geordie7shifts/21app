import { useSelector } from "react-redux";
import { RootState } from "../types/store";

export const useTheme = () => {
  const { theme } = useSelector((state: RootState) => state.settings);
  return theme;
};
