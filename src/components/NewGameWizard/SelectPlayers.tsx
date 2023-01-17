import { ScrollView } from "react-native";
import { Col } from "../../elements/Col";
import { Row } from "../../elements/Row";
import { Text } from "../../elements/Text";
import { usePlayers } from "../../hooks/usePlayers";
import { FontSize } from "../../styles/consts";
import { Player } from "../../types/players";
import { AddPlayer } from "../AddPlayer";
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

  const togglePlayer = (player: Player) => {
    if (selectedPlayers.includes(player)) {
      setSelectedPlayers(selectedPlayers.filter((p) => p.id != player.id));
    } else {
      setSelectedPlayers([...selectedPlayers, player]);
    }
  };

  const isSelected = (player: Player): boolean => {
    return selectedPlayers.includes(player);
  };

  return (
    <Col>
      <AddPlayer />
      <Text size={FontSize.lg}>Who's Playing?</Text>
      <ScrollView
        style={{
          marginTop: 10,
          marginBottom: 20,
          padding: 15,
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
        <Row style={{ height: 10 }}></Row>
      </ScrollView>
    </Col>
  );
};
