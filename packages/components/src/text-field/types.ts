import type MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import type { ComponentProps } from "react";
import type { TextInputProps } from "react-native";

export type TextFieldVariant = "filled" | "outlined";

export interface TextFieldProps
  extends Omit<TextInputProps, "placeholderTextColor" | "editable"> {
  label?: string;
  variant?: TextFieldVariant;
  supportingText?: string;
  errorText?: string;
  error?: boolean;
  disabled?: boolean;
  leadingIcon?: ComponentProps<typeof MaterialCommunityIcons>["name"];
  trailingIcon?: ComponentProps<typeof MaterialCommunityIcons>["name"];
  onTrailingIconPress?: () => void;
}
