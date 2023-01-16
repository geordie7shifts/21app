import { StyleSheet, View, ViewStyle } from "react-native";
import { FlexProps, Stylable } from "../types/styles";

interface Props extends FlexProps, Stylable<ViewStyle> {
  flexDirection?: "row" | "row-reverse";
  children?: any;
}

export const Row = (props: Props) => {
  const style = StyleSheet.create({
    row: {
      display: "flex",
      flexDirection: props.flexDirection ?? "row",
      justifyContent: props.justifyContent,
      alignItems: props.alignItems,
    },
  });

  return <View style={[style.row, props.style]}>{props.children}</View>;
};
