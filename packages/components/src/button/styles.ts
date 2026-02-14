import type { ViewStyle } from "react-native";
import { StyleSheet } from "react-native";
import type { Theme } from "@rn-ui/core";

import type { ButtonVariant } from "./types";
import { alphaColor, blendColor } from "../utils/color";

interface VariantColors {
  backgroundColor: string;
  textColor: string;
  borderColor: string;
  borderWidth: number;
  hoveredBackgroundColor: string;
  pressedBackgroundColor: string;
  disabledBackgroundColor: string;
  disabledTextColor: string;
  disabledBorderColor: string;
}

function getVariantColors(theme: Theme, variant: ButtonVariant): VariantColors {
  const disabledContainerColor = alphaColor(theme.colors.onSurface, 0.12);
  const disabledLabelColor = alphaColor(theme.colors.onSurface, 0.38);
  const disabledOutlineColor = alphaColor(theme.colors.onSurface, 0.12);

  if (variant === "outlined") {
    return {
      backgroundColor: "transparent",
      textColor: theme.colors.primary,
      borderColor: theme.colors.outline,
      borderWidth: 1,
      hoveredBackgroundColor: alphaColor(
        theme.colors.primary,
        theme.stateLayer.hoveredOpacity
      ),
      pressedBackgroundColor: alphaColor(
        theme.colors.primary,
        theme.stateLayer.pressedOpacity
      ),
      disabledBackgroundColor: "transparent",
      disabledTextColor: disabledLabelColor,
      disabledBorderColor: disabledOutlineColor
    };
  }

  if (variant === "text") {
    return {
      backgroundColor: "transparent",
      textColor: theme.colors.primary,
      borderColor: "transparent",
      borderWidth: 0,
      hoveredBackgroundColor: alphaColor(
        theme.colors.primary,
        theme.stateLayer.hoveredOpacity
      ),
      pressedBackgroundColor: alphaColor(
        theme.colors.primary,
        theme.stateLayer.pressedOpacity
      ),
      disabledBackgroundColor: "transparent",
      disabledTextColor: disabledLabelColor,
      disabledBorderColor: "transparent"
    };
  }

  if (variant === "elevated") {
    return {
      backgroundColor: theme.colors.surfaceContainerLow,
      textColor: theme.colors.primary,
      borderColor: theme.colors.surfaceContainerLow,
      borderWidth: 0,
      hoveredBackgroundColor: blendColor(
        theme.colors.surfaceContainerLow,
        theme.colors.primary,
        theme.stateLayer.hoveredOpacity
      ),
      pressedBackgroundColor: blendColor(
        theme.colors.surfaceContainerLow,
        theme.colors.primary,
        theme.stateLayer.pressedOpacity
      ),
      disabledBackgroundColor: disabledContainerColor,
      disabledTextColor: disabledLabelColor,
      disabledBorderColor: disabledContainerColor
    };
  }

  if (variant === "tonal") {
    return {
      backgroundColor: theme.colors.secondaryContainer,
      textColor: theme.colors.onSecondaryContainer,
      borderColor: theme.colors.secondaryContainer,
      borderWidth: 0,
      hoveredBackgroundColor: blendColor(
        theme.colors.secondaryContainer,
        theme.colors.onSecondaryContainer,
        theme.stateLayer.hoveredOpacity
      ),
      pressedBackgroundColor: blendColor(
        theme.colors.secondaryContainer,
        theme.colors.onSecondaryContainer,
        theme.stateLayer.pressedOpacity
      ),
      disabledBackgroundColor: disabledContainerColor,
      disabledTextColor: disabledLabelColor,
      disabledBorderColor: disabledContainerColor
    };
  }

  // filled (default)
  return {
    backgroundColor: theme.colors.primary,
    textColor: theme.colors.onPrimary,
    borderColor: theme.colors.primary,
    borderWidth: 0,
    hoveredBackgroundColor: blendColor(
      theme.colors.primary,
      theme.colors.onPrimary,
      theme.stateLayer.hoveredOpacity
    ),
    pressedBackgroundColor: blendColor(
      theme.colors.primary,
      theme.colors.onPrimary,
      theme.stateLayer.pressedOpacity
    ),
    disabledBackgroundColor: disabledContainerColor,
    disabledTextColor: disabledLabelColor,
    disabledBorderColor: disabledContainerColor
  };
}

function getHorizontalPadding(
  theme: Theme,
  variant: ButtonVariant,
  hasLeadingIcon: boolean,
  hasTrailingIcon: boolean
): { paddingLeft: number; paddingRight: number } {
  if (variant === "text") {
    // M3: text button uses 12dp base, opposite side of icon gets 16dp
    return {
      paddingLeft: hasTrailingIcon && !hasLeadingIcon ? theme.spacing.md : 12,
      paddingRight: hasLeadingIcon && !hasTrailingIcon ? theme.spacing.md : 12
    };
  }

  // M3: filled/elevated/tonal/outlined use 24dp base, icon side gets 16dp
  return {
    paddingLeft: hasLeadingIcon ? theme.spacing.md : theme.spacing.lg,
    paddingRight: hasTrailingIcon ? theme.spacing.md : theme.spacing.lg
  };
}

export function createStyles(
  theme: Theme,
  variant: ButtonVariant,
  hasLeadingIcon: boolean,
  hasTrailingIcon: boolean
) {
  const colors = getVariantColors(theme, variant);
  const labelStyle = theme.typography.labelLarge;
  const padding = getHorizontalPadding(theme, variant, hasLeadingIcon, hasTrailingIcon);
  const elevationLevel0: Pick<
    ViewStyle,
    "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "elevation"
  > = {
    shadowColor: theme.elevation.level0.shadowColor,
    shadowOffset: {
      width: theme.elevation.level0.shadowOffset.width,
      height: theme.elevation.level0.shadowOffset.height
    },
    shadowOpacity: theme.elevation.level0.shadowOpacity,
    shadowRadius: theme.elevation.level0.shadowRadius,
    elevation: theme.elevation.level0.elevation
  };
  const elevationLevel1: Pick<
    ViewStyle,
    "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "elevation"
  > = {
    shadowColor: theme.elevation.level1.shadowColor,
    shadowOffset: {
      width: theme.elevation.level1.shadowOffset.width,
      height: theme.elevation.level1.shadowOffset.height
    },
    shadowOpacity: theme.elevation.level1.shadowOpacity,
    shadowRadius: theme.elevation.level1.shadowRadius,
    elevation: theme.elevation.level1.elevation
  };
  const elevationLevel2: Pick<
    ViewStyle,
    "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "elevation"
  > = {
    shadowColor: theme.elevation.level2.shadowColor,
    shadowOffset: {
      width: theme.elevation.level2.shadowOffset.width,
      height: theme.elevation.level2.shadowOffset.height
    },
    shadowOpacity: theme.elevation.level2.shadowOpacity,
    shadowRadius: theme.elevation.level2.shadowRadius,
    elevation: theme.elevation.level2.elevation
  };
  const elevationStyle = variant === "elevated" ? elevationLevel1 : elevationLevel0;

  return StyleSheet.create({
    container: {
      alignSelf: "flex-start",
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "center",
      minWidth: 58,
      minHeight: 40,
      paddingLeft: padding.paddingLeft,
      paddingRight: padding.paddingRight,
      paddingVertical: 10,
      borderRadius: theme.shape.cornerFull,
      backgroundColor: colors.backgroundColor,
      borderColor: colors.borderColor,
      borderWidth: colors.borderWidth,
      cursor: "pointer",
      ...elevationStyle
    },
    hoveredContainer: {
      backgroundColor: colors.hoveredBackgroundColor,
      ...(variant === "elevated" ? elevationLevel2 : undefined)
    },
    pressedContainer: {
      backgroundColor: colors.pressedBackgroundColor
    },
    disabledContainer: {
      backgroundColor: colors.disabledBackgroundColor,
      borderColor: colors.disabledBorderColor,
      cursor: "auto",
      ...elevationLevel0
    },
    label: {
      fontFamily: labelStyle.fontFamily,
      fontSize: labelStyle.fontSize,
      lineHeight: labelStyle.lineHeight,
      fontWeight: labelStyle.fontWeight,
      letterSpacing: labelStyle.letterSpacing,
      color: colors.textColor
    },
    leadingIcon: {
      marginRight: theme.spacing.sm
    },
    trailingIcon: {
      marginLeft: theme.spacing.sm
    },
    disabledLabel: {
      color: colors.disabledTextColor
    }
  });
}
