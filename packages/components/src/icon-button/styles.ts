import { StyleSheet } from "react-native";
import type { Theme } from "@rn-ui/core";

export function createStyles(theme: Theme) {
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
    pressed: {
      opacity: 0.72
    },
    disabled: {
      opacity: 0.38
    }
  });
}
