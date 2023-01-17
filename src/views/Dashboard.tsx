import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { NewGameButton } from "../components/Buttons/NewGameButton";
import { Text } from "../elements/Text";
import { actions } from "../store/actions/playerActions";
import { FontSize } from "../styles/consts";
import { RootState } from "../types/store";

export const Dashboard = () => {
  const { games } = useSelector((state: RootState) => state.games);
  const { players } = useSelector((state: RootState) => state.players);

  const dispatch = useDispatch();

  return (
    <View>
      <Text>Games: {games.length}</Text>
      <Text size={FontSize.lg}>Players list:</Text>
      {players.map((player) => (
        <Text
          key={player.id}
          onClick={() => {
            console.log(`removing player ${player.name} (${player.id})`);
            dispatch(actions.removePlayer(player));
          }}
        >
          {player.name}
        </Text>
      ))}
      <NewGameButton />
    </View>
  );
};
