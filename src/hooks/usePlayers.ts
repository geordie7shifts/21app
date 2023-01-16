import { useSelector } from "react-redux";
import { Player } from "../types/players";
import { RootState } from "../types/store";

export const usePlayers = (): Player[] => {
  const { players } = useSelector((state: RootState) => state.players);
  return players;
};
