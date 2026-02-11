import { useMemo } from "react";
import type { PropsWithChildren } from "react";
import type { StyleProp, ViewStyle } from "react-native";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import type { Edge } from "react-native-safe-area-context";
import { useTheme } from "@rn-ui/core";

import type { Theme } from "@rn-ui/core";

export interface LayoutProps extends PropsWithChildren {
  immersive?: boolean;
  edges?: Edge[];
  style?: StyleProp<ViewStyle>;
}

const immersiveEdges: Edge[] = ["left", "right", "bottom"];

function createStyles(theme: Theme) {
  return StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: theme.colors.background
    }
  });
}

export function Layout({
  children,
  immersive = false,
  edges,
  style
}: LayoutProps) {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const resolvedEdges = immersive ? immersiveEdges : edges;

  return (
    <SafeAreaView style={[styles.root, style]} edges={resolvedEdges}>
      {children}
    </SafeAreaView>
  );
}
