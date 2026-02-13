import type MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import type { ComponentProps } from "react";
import type { PressableProps } from "react-native";

export type IconButtonVariant = "filled" | "tonal" | "outlined" | "standard";
export type IconButtonSize = "small" | "medium" | "large";

export interface IconButtonProps
  extends Omit<PressableProps, "children" | "onPress" | "style"> {
  icon: ComponentProps<typeof MaterialCommunityIcons>["name"];
  selectedIcon?: ComponentProps<typeof MaterialCommunityIcons>["name"];
  onPress?: () => void;
  disabled?: boolean;
  variant?: IconButtonVariant;
  selected?: boolean;
  size?: IconButtonSize;
}
