import { StyleProp } from "react-native";

export interface FlexProps {
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems?: "baseline" | "flex-end" | "flex-start" | "center" | "stretch";
}

export interface Stylable<T> {
  style?: StyleProp<T>;
}
