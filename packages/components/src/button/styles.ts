import { StyleSheet } from "react-native";
import type { Theme } from "@rn-ui/core";

import type { ButtonVariant } from "./types";

interface VariantColors {
  backgroundColor: string;
  textColor: string;
  borderColor: string;
  borderWidth: number;
}

function getVariantColors(theme: Theme, variant: ButtonVariant): VariantColors {
  if (variant === "outlined") {
    return {
      backgroundColor: theme.colors.surface,
      textColor: theme.colors.primary,
      borderColor: theme.colors.outline,
      borderWidth: 1
    };
  }

  if (variant === "text") {
    return {
      backgroundColor: theme.colors.surface,
      textColor: theme.colors.primary,
      borderColor: theme.colors.surface,
      borderWidth: 0
    };
  }

  if (variant === "tonal") {
    return {
      backgroundColor: theme.colors.secondaryContainer,
      textColor: theme.colors.onSecondaryContainer,
      borderColor: theme.colors.secondaryContainer,
      borderWidth: 0
    };
  }

  return {
    backgroundColor: theme.colors.primary,
    textColor: theme.colors.onPrimary,
    borderColor: theme.colors.primary,
    borderWidth: 0
  };
}

export function createStyles(theme: Theme, variant: ButtonVariant) {
  const colors = getVariantColors(theme, variant);

  return StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 16,
      paddingVertical: 10,
      borderRadius: theme.shape.cornerFull,
      backgroundColor: colors.backgroundColor,
      borderColor: colors.borderColor,
      borderWidth: colors.borderWidth
    },
    pressed: {
      opacity: 0.88
    },
    disabled: {
      opacity: 0.5
    },
    label: {
      fontFamily: theme.typography.labelSmall.fontFamily,
      fontSize: theme.typography.labelSmall.fontSize,
      lineHeight: theme.typography.labelSmall.lineHeight,
      fontWeight: theme.typography.labelSmall.fontWeight,
      letterSpacing: theme.typography.labelSmall.letterSpacing,
      color: colors.textColor
    }
  });
}
