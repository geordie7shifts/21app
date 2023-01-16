import { ScrollView } from "react-native";
import { useDispatch } from "react-redux";
import { Col } from "../../elements/Col";
import { Text } from "../../elements/Text";
import { usePlayers } from "../../hooks/usePlayers";
import { FontSize } from "../../styles/consts";
import { Player } from "../../types/players";
import { PlayerToggle } from "./PlayerToggle";

interface Props {
  selectedPlayers: Player[];
  setSelectedPlayers: Function;
}

export const SelectPlayers = ({
  selectedPlayers,
  setSelectedPlayers,
}: Props) => {
  const playerList = usePlayers();
  const dispatch = useDispatch();

  const togglePlayer = (player: Player) => {
    if (selectedPlayers.includes(player)) {
      console.log("toggling", player.name, "on");
      setSelectedPlayers(selectedPlayers.filter((p) => p.id != player.id));
    } else {
      console.log("toggling", player.name, "off");
      setSelectedPlayers([...selectedPlayers, player]);
    }
  };

  const isSelected = (player: Player): boolean => {
    return selectedPlayers.includes(player);
  };

  return (
    <Col
      style={{
        padding: 15,
      }}
    >
      <Text size={FontSize.lg}>Who's Playing?</Text>
      <ScrollView
        style={{
          borderWidth: 2,
          marginTop: 10,
          marginBottom: 40,
          padding: 15,
          borderRadius: 20,
          height: 200,
          maxHeight: 400,
          flex: 1,
        }}
      >
        {playerList.map((player) => {
          return (
            <PlayerToggle
              key={player.id}
              player={player}
              selected={isSelected(player)}
              onClick={togglePlayer}
            />
          );
        })}
      </ScrollView>
    </Col>
  );
};
