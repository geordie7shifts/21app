import { StyleSheet, Text as T } from "react-native";
import { FontSize } from "../styles/consts";

interface Props {
  size?: FontSize;
  color?: string;
  children?: any;
  onClick?: any;
}

export const Text = (props: Props) => {
  const styles = StyleSheet.create({
    container: {
      fontSize: props.size ?? FontSize.md,
      color: props.color ?? "black",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  return (
    <T onPress={props.onClick} style={styles.container}>
      {props.children}
    </T>
  );
};
