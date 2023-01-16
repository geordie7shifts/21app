import { Pressable, StyleSheet, View } from "react-native";
import { Text } from "../elements/Text";
import { useTheme } from "../hooks/useTheme";
import { FontSize } from "../styles/consts";
import { getTextColor } from "../utils/themeUtils";

interface Props {
  onClick: any;
  buttons: {
    icon: string;
    name: string;
  }[];
  selected: number;
}

export const MenuBar = ({ buttons, onClick, selected }: Props) => {
  const theme = useTheme();

  const style = StyleSheet.create({
    bar: {
      display: "flex",
      flexDirection: "row",
      alignContent: "flex-start",
      justifyContent: "center",
      height: 50,
    },
    button: {
      padding: 5,
      borderWidth: 1,
      borderColor: "black",
      flex: 1,
    },
  });

  return (
    <View style={style.bar}>
      {buttons.map((button, i) => {
        const activeColor = selected == i ? "#80c0a0" : "#666666";
        return (
          <Pressable
            style={[
              style.button,
              {
                backgroundColor: activeColor,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              },
            ]}
            key={i}
            onPress={() => onClick(i)}
          >
            <Text size={FontSize.md} color={getTextColor(activeColor)}>
              {button.name}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};
