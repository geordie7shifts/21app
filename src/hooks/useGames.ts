import { useSelector } from "react-redux";
import { Game, Series } from "../types/games";
import { RootState } from "../types/store";

export const useGames = (): Game[] => {
  const { games } = useSelector((state: RootState) => state.games);
  return games;
};

export const useSeries = (): Series[] => {
  const { series } = useSelector((state: RootState) => state.games);
  return series;
};
