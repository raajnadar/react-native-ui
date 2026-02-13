import { StyleSheet } from "react-native";
import type { Theme } from "@rn-ui/core";

export function createStyles(theme: Theme) {
  return StyleSheet.create({
    root: {
      backgroundColor: theme.colors.surface
    },
    safeArea: {
      backgroundColor: theme.colors.surface
    },
    smallContainer: {
      height: 64,
      position: "relative"
    },
    mediumContainer: {
      height: 112
    },
    largeContainer: {
      height: 152
    },
    expandedContainer: {
      position: "relative"
    },
    topRow: {
      height: 64,
      paddingHorizontal: 4,
      flexDirection: "row",
      alignItems: "center"
    },
    expandedTitleContainer: {
      flex: 1,
      justifyContent: "flex-end",
      paddingRight: theme.spacing.md
    },
    topRowSpacer: {
      flex: 1
    },
    sideSlot: {
      flexDirection: "row",
      alignItems: "center",
      minHeight: 48
    },
    actionsRow: {
      flexDirection: "row",
      alignItems: "center"
    },
    iconFrame: {
      width: 48,
      height: 48,
      alignItems: "center",
      justifyContent: "center"
    },
    overlayTitleContainer: {
      position: "absolute",
      top: 0,
      bottom: 0,
      justifyContent: "center"
    },
    centeredTitle: {
      textAlign: "center"
    },
    startAlignedTitle: {
      textAlign: "left"
    },
    mediumTitlePadding: {
      paddingBottom: 24
    },
    largeTitlePadding: {
      paddingBottom: 28
    },
    title: {
      flexShrink: 1,
      includeFontPadding: false,
      textAlignVertical: "center"
    }
  });
}
