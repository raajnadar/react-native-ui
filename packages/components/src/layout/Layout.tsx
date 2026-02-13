import { useMemo } from "react";
import type { PropsWithChildren } from "react";
import type { StyleProp, ViewStyle } from "react-native";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import type { Edge } from "react-native-safe-area-context";
import { useTheme } from "@rn-ui/core";

export interface LayoutProps extends PropsWithChildren {
  immersive?: boolean;
  edges?: Edge[];
  style?: StyleProp<ViewStyle>;
}

const defaultEdges: Edge[] = ["bottom"];

function resolveEdges(immersive?: boolean, edges?: Edge[]): Edge[] {
  if (edges) {
    return edges;
  }

  if (immersive) {
    return [];
  }

  return defaultEdges;
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
});

function removeBackgroundColor(style?: StyleProp<ViewStyle>) {
  if (!style) {
    return undefined;
  }

  const flattenedStyle = StyleSheet.flatten(style);

  if (!flattenedStyle || flattenedStyle.backgroundColor === undefined) {
    return style;
  }

  const styleWithoutBackground = { ...flattenedStyle };
  delete styleWithoutBackground.backgroundColor;

  return styleWithoutBackground;
}

export function Layout({
  immersive,
  edges,
  children,
  style
}: LayoutProps) {
  const theme = useTheme();
  const themeBackgroundStyle = useMemo(
    () => ({ backgroundColor: theme.colors.background }),
    [theme.colors.background]
  );
  const styleWithoutBackground = useMemo(() => removeBackgroundColor(style), [style]);
  const safeAreaEdges = useMemo(() => resolveEdges(immersive, edges), [immersive, edges]);

  return (
    <SafeAreaView style={[styles.root, themeBackgroundStyle, styleWithoutBackground]} edges={safeAreaEdges}>
      {children}
    </SafeAreaView>
  );
}
