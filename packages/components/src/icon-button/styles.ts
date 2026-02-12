import { StyleSheet } from "react-native";
import type { Theme } from "@rn-ui/core";

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

export function createStyles(theme: Theme) {
  const disabledContainerColor = alphaColor(theme.colors.onSurface, 0.12);
  const disabledOutlineColor = alphaColor(theme.colors.onSurface, 0.12);

  return StyleSheet.create({
    container: {
      width: 40,
      height: 40,
      borderRadius: theme.shape.cornerFull,
      alignItems: "center",
      justifyContent: "center"
    },
    colorFilled: {
      backgroundColor: theme.colors.primary,
      borderColor: theme.colors.primary,
      borderWidth: 0
    },
    colorTonal: {
      backgroundColor: theme.colors.secondaryContainer,
      borderColor: theme.colors.secondaryContainer,
      borderWidth: 0
    },
    colorOutlined: {
      borderColor: theme.colors.outline,
      borderWidth: 1
    },
    colorStandard: {
      borderWidth: 0
    },
    pressedFilled: {
      backgroundColor: blendColor(
        theme.colors.primary,
        theme.colors.onPrimary,
        theme.stateLayer.pressedOpacity
      )
    },
    pressedTonal: {
      backgroundColor: blendColor(
        theme.colors.secondaryContainer,
        theme.colors.onSecondaryContainer,
        theme.stateLayer.pressedOpacity
      )
    },
    pressedOutlined: {
      backgroundColor: alphaColor(
        theme.colors.onSurfaceVariant,
        theme.stateLayer.pressedOpacity
      )
    },
    pressedStandard: {
      backgroundColor: alphaColor(
        theme.colors.onSurfaceVariant,
        theme.stateLayer.pressedOpacity
      )
    },
    disabledFilled: {
      backgroundColor: disabledContainerColor,
      borderColor: disabledContainerColor
    },
    disabledTonal: {
      backgroundColor: disabledContainerColor,
      borderColor: disabledContainerColor
    },
    disabledOutlined: {
      backgroundColor: "transparent",
      borderColor: disabledOutlineColor
    },
    disabledStandard: {
      backgroundColor: "transparent",
      borderColor: "transparent"
    }
  });
}
