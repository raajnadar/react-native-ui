import type MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import type { ComponentProps } from "react";
import type { PressableProps } from "react-native";

export type IconButtonVariant = "filled" | "tonal" | "outlined" | "standard";
export type IconButtonSize = "small" | "medium" | "large";

export interface IconButtonProps
  extends Omit<PressableProps, "children" | "onPress" | "style" | "accessibilityLabel"> {
  icon: ComponentProps<typeof MaterialCommunityIcons>["name"];
  selectedIcon?: ComponentProps<typeof MaterialCommunityIcons>["name"];
  iconColor?: string;
  onPress?: () => void;
  disabled?: boolean;
  variant?: IconButtonVariant;
  selected?: boolean;
  size?: IconButtonSize;
  /** Required — icon-only buttons must have a label for screen readers */
  accessibilityLabel: string;
}
