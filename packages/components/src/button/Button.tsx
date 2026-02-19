import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useMemo } from "react";
import { Platform, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import type { StyleProp, ViewStyle } from "react-native";
import { useTheme } from "@rn-ui/core";

import { createStyles } from "./styles";
import type { ButtonProps } from "./types";

interface PressableState {
  pressed: boolean;
  hovered?: boolean;
}

function resolveStyle(
  containerStyle: StyleProp<ViewStyle>,
  hoveredContainerStyle: StyleProp<ViewStyle>,
  pressedContainerStyle: StyleProp<ViewStyle>,
  disabledContainerStyle: StyleProp<ViewStyle>,
  disabled: boolean,
  style: ButtonProps["style"]
): (state: PressableState) => StyleProp<ViewStyle> {
  if (typeof style === "function") {
    return (state) => [
      containerStyle,
      state.hovered && !state.pressed && !disabled
        ? hoveredContainerStyle
        : undefined,
      state.pressed && !disabled ? pressedContainerStyle : undefined,
      disabled ? disabledContainerStyle : undefined,
      style(state)
    ];
  }

  return (state) => [
    containerStyle,
    state.hovered && !state.pressed && !disabled
      ? hoveredContainerStyle
      : undefined,
    state.pressed && !disabled ? pressedContainerStyle : undefined,
    disabled ? disabledContainerStyle : undefined,
    style
  ];
}

export function Button({
  children,
  style,
  variant = "filled",
  leadingIcon,
  trailingIcon,
  iconSize = 18,
  disabled = false,
  ...props
}: ButtonProps) {
  const isDisabled = Boolean(disabled);
  const hasLeading = Boolean(leadingIcon);
  const hasTrailing = Boolean(trailingIcon);
  const theme = useTheme();
  const styles = useMemo(
    () => createStyles(theme, variant, hasLeading, hasTrailing),
    [theme, variant, hasLeading, hasTrailing]
  );
  const labelStyle = useMemo(
    () => StyleSheet.flatten([styles.label, isDisabled ? styles.disabledLabel : undefined]),
    [isDisabled, styles.disabledLabel, styles.label]
  );
  const iconColor = (labelStyle as { color?: unknown } | undefined)?.color;
  const resolvedIconColor = typeof iconColor === "string" ? iconColor : undefined;

  return (
    <Pressable
      {...props}
      accessibilityRole="button"
      accessibilityState={{ disabled: isDisabled }}
      hitSlop={Platform.OS === "web" ? undefined : 4}
      disabled={isDisabled}
      style={resolveStyle(
        styles.container,
        styles.hoveredContainer,
        styles.pressedContainer,
        styles.disabledContainer,
        isDisabled,
        style
      )}
    >
      {leadingIcon ? (
        <MaterialCommunityIcons
          name={leadingIcon}
          size={iconSize}
          color={resolvedIconColor}
          style={styles.leadingIcon}
        />
      ) : null}
      <Text style={labelStyle}>{children}</Text>
      {trailingIcon ? (
        <MaterialCommunityIcons
          name={trailingIcon}
          size={iconSize}
          color={resolvedIconColor}
          style={styles.trailingIcon}
        />
      ) : null}
    </Pressable>
  );
}
