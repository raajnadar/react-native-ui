import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useMemo } from "react";
import { Pressable } from "react-native";
import { useTheme } from "@rn-ui/core";

import { createStyles } from "./styles";
import type { IconButtonProps, IconButtonVariant } from "./types";

function getIconColor(
  variant: IconButtonVariant,
  theme: ReturnType<typeof useTheme>
): string {
  if (variant === "filled") {
    return theme.colors.onPrimary;
  }

  if (variant === "tonal") {
    return theme.colors.onSecondaryContainer;
  }

  return theme.colors.onSurface;
}

function getColorStyle(
  styles: ReturnType<typeof createStyles>,
  variant: IconButtonVariant
) {
  if (variant === "tonal") {
    return styles.colorTonal;
  }

  if (variant === "outlined") {
    return styles.colorOutlined;
  }

  if (variant === "standard") {
    return styles.colorStandard;
  }

  return styles.colorFilled;
}

export function IconButton({
  icon,
  onPress,
  disabled = false,
  variant = "filled",
  ...props
}: IconButtonProps) {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const iconColor = getIconColor(variant, theme);
  const isDisabled = Boolean(disabled);

  return (
    <Pressable
      {...props}
      accessibilityRole="button"
      accessibilityState={{ disabled: isDisabled }}
      disabled={isDisabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        getColorStyle(styles, variant),
        pressed && !isDisabled ? styles.pressed : undefined,
        isDisabled ? styles.disabled : undefined
      ]}
    >
      <MaterialCommunityIcons name={icon} size={24} color={iconColor} />
    </Pressable>
  );
}
