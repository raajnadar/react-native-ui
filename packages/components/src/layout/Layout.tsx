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

function createStyles(theme: Theme) {
  return StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: theme.colors.background
    }
  });
}

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
  children,
  style
}: LayoutProps) {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const styleWithoutBackground = useMemo(() => removeBackgroundColor(style), [style]);

  return (
    <SafeAreaView style={[styles.root, styleWithoutBackground]} edges={["bottom"]}>
      {children}
    </SafeAreaView>
  );
}
