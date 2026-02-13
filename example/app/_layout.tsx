import { useMemo } from "react";
import { StyleSheet, View, useColorScheme } from "react-native";
import { Slot, useRouter, useSegments } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { MaterialProvider, darkTheme, lightTheme, useTheme } from "@rn-ui/core";
import { AppBar, Layout } from "@rn-ui/components";

function resolveRouteName(segments: string[]): string {
  const visibleSegments = segments.filter((segment) => !segment.startsWith("("));
  const currentSegment = visibleSegments[visibleSegments.length - 1];

  return currentSegment ?? "index";
}

function resolveTitle(routeName: string): string {
  if (routeName === "index") {
    return "Home";
  }

  return routeName
    .replace(/^\[|\]$/g, "")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

const stackScreenOptions = {
  headerShown: false
} as const;

function isDarkColor(color: string): boolean {
  const normalizedHex = color.replace("#", "");

  if (normalizedHex.length !== 6 && normalizedHex.length !== 8) {
    return false;
  }

  const r = Number.parseInt(normalizedHex.slice(0, 2), 16);
  const g = Number.parseInt(normalizedHex.slice(2, 4), 16);
  const b = Number.parseInt(normalizedHex.slice(4, 6), 16);

  if (Number.isNaN(r) || Number.isNaN(g) || Number.isNaN(b)) {
    return false;
  }

  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return luminance < 0.5;
}

const styles = StyleSheet.create({
  content: {
    flex: 1
  }
});

function RootLayoutContent() {
  const theme = useTheme();
  const router = useRouter();
  const segments = useSegments();
  const routeName = useMemo(() => resolveRouteName(segments), [segments]);
  const title = useMemo(() => resolveTitle(routeName), [routeName]);
  const canGoBack = routeName !== "index";
  const statusBarStyle = isDarkColor(theme.colors.surface) ? "light" : "dark";

  return (
    <>
      <StatusBar
        animated={false}
        style={statusBarStyle}
        backgroundColor={theme.colors.surface}
        translucent={false}
      />
      <Layout edges={["bottom"]}>
        <AppBar
          title={title}
          canGoBack={canGoBack}
          onBackPress={() => router.back()}
          insetTop
        />
        <View style={styles.content}>
          <Slot screenOptions={stackScreenOptions} />
        </View>
      </Layout>
    </>
  );
}

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? darkTheme : lightTheme;

  return (
    <MaterialProvider theme={theme}>
      <RootLayoutContent />
    </MaterialProvider>
  );
}
