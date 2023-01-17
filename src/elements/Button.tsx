import { Pressable, StyleSheet, ViewStyle } from "react-native";
import { useTheme } from "../hooks/useTheme";
import { FontSize } from "../styles/consts";
import { Stylable } from "../types/styles";
import { getTextColor } from "../utils/themeUtils";
import { Text } from "./Text";

interface Props extends Stylable<ViewStyle> {
  text?: string;
  fontSize?: FontSize;
  color?: string;
  backgroundColor?: string;
  children?: any;
  onClick?: any;
  disabled?: boolean;
}

export const Button = (props: Props) => {
  const theme = useTheme();

  const bgColor = props.color ?? theme.fifth;

  const styles = StyleSheet.create({
    button: {
      fontSize: props.fontSize ?? FontSize.md,
      color: props.color ?? theme.fourth,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: props.disabled ? "#aaa" : bgColor,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 10,
    },
  });

  return (
    <Pressable
      onPress={props.onClick}
      style={[styles.button, props.style]}
      disabled={props.disabled}
    >
      <Text color={getTextColor(bgColor)}>{props.text ?? " "}</Text>
    </Pressable>
  );
};
