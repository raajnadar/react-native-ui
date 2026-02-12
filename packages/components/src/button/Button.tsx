import { useMemo } from "react";
import { Pressable } from "react-native";
import { Text } from "react-native";
import type { StyleProp, ViewStyle } from "react-native";
import { useTheme } from "@rn-ui/core";

import { createStyles } from "./styles";
import type { ButtonProps } from "./types";

function resolveStyle(
  containerStyle: StyleProp<ViewStyle>,
  pressedContainerStyle: StyleProp<ViewStyle>,
  disabledContainerStyle: StyleProp<ViewStyle>,
  disabled: boolean,
  style: ButtonProps["style"]
): (state: { pressed: boolean }) => StyleProp<ViewStyle> {
  if (typeof style === "function") {
    return (state) => [
      containerStyle,
      state.pressed && !disabled ? pressedContainerStyle : undefined,
      disabled ? disabledContainerStyle : undefined,
      style(state)
    ];
  }

  return ({ pressed }) => [
    containerStyle,
    pressed && !disabled ? pressedContainerStyle : undefined,
    disabled ? disabledContainerStyle : undefined,
    style
  ];
}

export function Button({
  children,
  style,
  variant = "filled",
  disabled = false,
  ...props
}: ButtonProps) {
  const isDisabled = Boolean(disabled);
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme, variant), [theme, variant]);

  return (
    <Pressable
      {...props}
      accessibilityRole="button"
      accessibilityState={{ disabled: isDisabled }}
      disabled={isDisabled}
      style={resolveStyle(
        styles.container,
        styles.pressedContainer,
        styles.disabledContainer,
        isDisabled,
        style
      )}
    >
      <Text style={[styles.label, isDisabled ? styles.disabledLabel : undefined]}>
        {children}
      </Text>
    </Pressable>
  );
}
