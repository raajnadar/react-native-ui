import type { PressableProps } from "react-native";

export type ButtonVariant = "filled" | "outlined" | "text" | "tonal";

export interface ButtonProps extends Omit<PressableProps, "children"> {
  children: string;
  variant?: ButtonVariant;
}
