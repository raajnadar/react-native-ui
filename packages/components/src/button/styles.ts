import { StyleSheet } from "react-native";
import type { Theme } from "@rn-ui/core";

import { typographyTokens } from "../typography/tokens";
import type { ButtonVariant } from "./types";

interface VariantColors {
  backgroundColor: string;
  textColor: string;
  borderColor: string;
  borderWidth: number;
  pressedBackgroundColor: string;
  disabledBackgroundColor: string;
  disabledTextColor: string;
  disabledBorderColor: string;
}

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

function blendColor(base: string, overlay: string, overlayAlpha: number): string {
  const baseChannels = parseHexColor(base);
  const overlayChannels = parseHexColor(overlay);
  const boundedAlpha = Math.max(0, Math.min(1, overlayAlpha));

  if (!baseChannels || !overlayChannels) {
    return alphaColor(overlay, boundedAlpha);
  }

  const r = Math.round(
    (1 - boundedAlpha) * baseChannels.r + boundedAlpha * overlayChannels.r
  );
  const g = Math.round(
    (1 - boundedAlpha) * baseChannels.g + boundedAlpha * overlayChannels.g
  );
  const b = Math.round(
    (1 - boundedAlpha) * baseChannels.b + boundedAlpha * overlayChannels.b
  );

  return `rgb(${r}, ${g}, ${b})`;
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
      pressedBackgroundColor: alphaColor(
        theme.colors.primary,
        theme.stateLayer.pressedOpacity
      ),
      disabledBackgroundColor: "transparent",
      disabledTextColor: disabledLabelColor,
      disabledBorderColor: "transparent"
    };
  }

  if (variant === "tonal") {
    return {
      backgroundColor: theme.colors.secondaryContainer,
      textColor: theme.colors.onSecondaryContainer,
      borderColor: theme.colors.secondaryContainer,
      borderWidth: 0,
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

  return {
    backgroundColor: theme.colors.primary,
    textColor: theme.colors.onPrimary,
    borderColor: theme.colors.primary,
    borderWidth: 0,
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

export function createStyles(theme: Theme, variant: ButtonVariant) {
  const colors = getVariantColors(theme, variant);
  const labelToken = typographyTokens.labelLarge;

  return StyleSheet.create({
    container: {
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "center",
      minWidth: 58,
      minHeight: 40,
      paddingHorizontal: theme.spacing.lg,
      paddingVertical: 10,
      borderRadius: theme.shape.cornerFull,
      backgroundColor: colors.backgroundColor,
      borderColor: colors.borderColor,
      borderWidth: colors.borderWidth
    },
    pressedContainer: {
      backgroundColor: colors.pressedBackgroundColor
    },
    disabledContainer: {
      backgroundColor: colors.disabledBackgroundColor,
      borderColor: colors.disabledBorderColor
    },
    label: {
      fontFamily: theme.typography.labelSmall.fontFamily,
      fontSize: labelToken.fontSize,
      lineHeight: labelToken.lineHeight,
      fontWeight: labelToken.fontWeight,
      letterSpacing: labelToken.letterSpacing,
      color: colors.textColor
    },
    disabledLabel: {
      color: colors.disabledTextColor
    }
  });
}
