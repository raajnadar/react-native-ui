import type MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import type { ComponentProps } from "react";
import type { PressableProps } from "react-native";

export type ButtonVariant = "filled" | "elevated" | "outlined" | "text" | "tonal";

export interface ButtonProps extends Omit<PressableProps, "children"> {
  children: string;
  variant?: ButtonVariant;
  leadingIcon?: ComponentProps<typeof MaterialCommunityIcons>["name"];
  trailingIcon?: ComponentProps<typeof MaterialCommunityIcons>["name"];
  iconSize?: number;
}
