import { StyleSheet } from "react-native";
import type { Theme } from "@rn-ui/core";
import { alphaColor, blendColor } from "../utils/color";

export function createStyles(theme: Theme) {
  const disabledContainerColor = alphaColor(theme.colors.onSurface, 0.12);
  const disabledOutlineColor = alphaColor(theme.colors.onSurface, 0.12);
  const toggleUnselectedContainerColor = theme.colors.surfaceContainerHighest;

  return StyleSheet.create({
    container: {
      borderRadius: theme.shape.cornerFull,
      alignItems: "center",
      justifyContent: "center"
    },
    sizeSmall: {
      width: 32,
      height: 32
    },
    sizeMedium: {
      width: 40,
      height: 40
    },
    sizeLarge: {
      width: 48,
      height: 48
    },
    colorFilled: {
      backgroundColor: theme.colors.primary,
      borderColor: theme.colors.primary,
      borderWidth: 0
    },
    colorFilledToggleUnselected: {
      backgroundColor: toggleUnselectedContainerColor,
      borderColor: toggleUnselectedContainerColor,
      borderWidth: 0
    },
    colorFilledToggleSelected: {
      backgroundColor: theme.colors.primary,
      borderColor: theme.colors.primary,
      borderWidth: 0
    },
    colorTonal: {
      backgroundColor: theme.colors.secondaryContainer,
      borderColor: theme.colors.secondaryContainer,
      borderWidth: 0
    },
    colorTonalToggleUnselected: {
      backgroundColor: toggleUnselectedContainerColor,
      borderColor: toggleUnselectedContainerColor,
      borderWidth: 0
    },
    colorTonalToggleSelected: {
      backgroundColor: theme.colors.secondaryContainer,
      borderColor: theme.colors.secondaryContainer,
      borderWidth: 0
    },
    colorOutlined: {
      borderColor: theme.colors.outline,
      borderWidth: 1
    },
    colorOutlinedToggleSelected: {
      backgroundColor: theme.colors.inverseSurface,
      borderColor: theme.colors.inverseSurface,
      borderWidth: 0
    },
    colorStandard: {
      borderWidth: 0
    },
    colorStandardToggleSelected: {
      borderWidth: 0
    },
    pressedFilled: {
      backgroundColor: blendColor(
        theme.colors.primary,
        theme.colors.onPrimary,
        theme.stateLayer.pressedOpacity
      )
    },
    pressedFilledToggleUnselected: {
      backgroundColor: blendColor(
        toggleUnselectedContainerColor,
        theme.colors.primary,
        theme.stateLayer.pressedOpacity
      )
    },
    pressedFilledToggleSelected: {
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
    pressedTonalToggleUnselected: {
      backgroundColor: blendColor(
        toggleUnselectedContainerColor,
        theme.colors.onSurfaceVariant,
        theme.stateLayer.pressedOpacity
      )
    },
    pressedTonalToggleSelected: {
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
    pressedOutlinedToggleUnselected: {
      backgroundColor: alphaColor(
        theme.colors.onSurfaceVariant,
        theme.stateLayer.pressedOpacity
      )
    },
    pressedOutlinedToggleSelected: {
      backgroundColor: blendColor(
        theme.colors.inverseSurface,
        theme.colors.inverseOnSurface,
        theme.stateLayer.pressedOpacity
      )
    },
    pressedStandard: {
      backgroundColor: alphaColor(
        theme.colors.onSurfaceVariant,
        theme.stateLayer.pressedOpacity
      )
    },
    pressedStandardToggleUnselected: {
      backgroundColor: alphaColor(
        theme.colors.onSurfaceVariant,
        theme.stateLayer.pressedOpacity
      )
    },
    pressedStandardToggleSelected: {
      backgroundColor: alphaColor(
        theme.colors.primary,
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
