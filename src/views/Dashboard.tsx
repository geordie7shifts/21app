import { useState } from "react";
import { TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../elements/Button";
import { Text } from "../elements/Text";
import { actions } from "../store/actions/playerActions";
import { FontSize } from "../styles/consts";
import { Player } from "../types/players";
import { RootState } from "../types/store";
import { getId } from "../utils";

export const Dashboard = () => {
  const { games } = useSelector((state: RootState) => state.games);
  const { players } = useSelector((state: RootState) => state.players);

  const dispatch = useDispatch();

  const [player, setPlayer] = useState("");

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
      <View>
        <TextInput
          style={{ borderColor: "red", borderWidth: 1 }}
          value={player}
          onChangeText={(e) => setPlayer(e)}
        />
        <Button
          text="Save"
          onClick={() => {
            let p: Player = {
              id: getId(),
              name: player,
            };
            console.log(`Adding player ${p.name} (${p.id})`);
            dispatch(actions.addPlayer(p));
          }}
        />
      </View>
    </View>
  );
};
