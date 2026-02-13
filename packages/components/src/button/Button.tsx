import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useMemo } from "react";
import { Pressable } from "react-native";
import { StyleSheet } from "react-native";
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
  leadingIcon,
  trailingIcon,
  iconSize = 18,
  disabled = false,
  ...props
}: ButtonProps) {
  const isDisabled = Boolean(disabled);
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme, variant), [theme, variant]);
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
      disabled={isDisabled}
      style={resolveStyle(
        styles.container,
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
