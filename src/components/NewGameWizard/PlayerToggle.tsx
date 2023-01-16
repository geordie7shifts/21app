import { Pressable } from "react-native";
import { Row } from "../../elements/Row";
import { Text } from "../../elements/Text";
import { FontSize } from "../../styles/consts";
import { Player } from "../../types/players";

interface Props {
  player: Player;
  selected: boolean;
  onClick: any;
}

export const PlayerToggle = ({ player, selected, onClick }: Props) => {
  return (
    <Pressable onPress={() => onClick(player)}>
      <Row justifyContent="space-between" alignItems="center" style={{}}>
        <Text size={FontSize.xl}>{player.name}</Text>
        {selected && <Text>∆</Text>}
      </Row>
    </Pressable>
  );
};
