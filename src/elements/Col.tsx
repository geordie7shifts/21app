import { StyleSheet, View, ViewStyle } from "react-native";
import { FlexProps, Stylable } from "../types/styles";

interface ColProps extends FlexProps, Stylable<ViewStyle> {
  flexDirection?: "column" | "column-reverse";
  children?: any;
}

export const Col = (props: ColProps) => {
  const style = StyleSheet.create({
    col: {
      flex: 1,
      flexDirection: props.flexDirection ?? "column",
      justifyContent: props.justifyContent,
    },
  });

  return <View style={[style.col, props.style]}>{props.children}</View>;
};
