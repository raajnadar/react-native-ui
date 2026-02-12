import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useMemo } from "react";
import { Pressable } from "react-native";
import { useTheme } from "@rn-ui/core";

import { createStyles } from "./styles";
import type { IconButtonProps, IconButtonVariant } from "./types";

function parseHexColor(color: string) {
  const normalized = color.replace("#", "");

  if (normalized.length !== 6 && normalized.length !== 8) {
    return null;
  }

  const r = Number.parseInt(normalized.slice(0, 2), 16);
  const g = Number.parseInt(normalized.slice(2, 4), 16);
  const b = Number.parseInt(normalized.slice(4, 6), 16);

  if (Number.isNaN(r) || Number.isNaN(g) || Number.isNaN(b)) {
    return null;
  }

  return { r, g, b };
}

function alphaColor(color: string, alpha: number): string {
  const channels = parseHexColor(color);
  const boundedAlpha = Math.max(0, Math.min(1, alpha));

  if (!channels) {
    return color;
  }

  return `rgba(${channels.r}, ${channels.g}, ${channels.b}, ${boundedAlpha})`;
}

function getIconColor(
  variant: IconButtonVariant,
  theme: ReturnType<typeof useTheme>,
  disabled: boolean
): string {
  if (disabled) {
    return alphaColor(theme.colors.onSurface, 0.38);
  }

  if (variant === "filled") {
    return theme.colors.onPrimary;
  }

  if (variant === "tonal") {
    return theme.colors.onSecondaryContainer;
  }

  return theme.colors.onSurfaceVariant;
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

function getPressedStyle(
  styles: ReturnType<typeof createStyles>,
  variant: IconButtonVariant
) {
  if (variant === "tonal") {
    return styles.pressedTonal;
  }

  if (variant === "outlined") {
    return styles.pressedOutlined;
  }

  if (variant === "standard") {
    return styles.pressedStandard;
  }

  return styles.pressedFilled;
}

function getDisabledStyle(
  styles: ReturnType<typeof createStyles>,
  variant: IconButtonVariant
) {
  if (variant === "tonal") {
    return styles.disabledTonal;
  }

  if (variant === "outlined") {
    return styles.disabledOutlined;
  }

  if (variant === "standard") {
    return styles.disabledStandard;
  }

  return styles.disabledFilled;
}

export function IconButton({
  icon,
  onPress,
  disabled = false,
  variant = "filled",
  hitSlop,
  ...props
}: IconButtonProps) {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const isDisabled = Boolean(disabled);
  const iconColor = getIconColor(variant, theme, isDisabled);

  return (
    <Pressable
      {...props}
      accessibilityRole="button"
      accessibilityState={{ disabled: isDisabled }}
      disabled={isDisabled}
      hitSlop={hitSlop ?? 4}
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        getColorStyle(styles, variant),
        pressed && !isDisabled ? getPressedStyle(styles, variant) : undefined,
        isDisabled ? getDisabledStyle(styles, variant) : undefined
      ]}
    >
      <MaterialCommunityIcons name={icon} size={24} color={iconColor} />
    </Pressable>
  );
}
