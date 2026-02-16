import { useMemo } from "react";
import { useRouter } from "expo-router";
import { useTheme } from "@rn-ui/core";
import { AppBar, Typography } from "@rn-ui/components";
import type { AppBarAction, AppBarVariant } from "@rn-ui/components";
import { ScrollView, StyleSheet, View } from "react-native";

const variants: Array<{
  key: AppBarVariant;
  label: string;
  variant: AppBarVariant;
  title: string;
}> = [
  {
    key: "small",
    label: "Small",
    variant: "small",
    title: "Small App Bar"
  },
  {
    key: "center-aligned",
    label: "Center Aligned",
    variant: "center-aligned",
    title: "Centered App Bar"
  },
  {
    key: "medium",
    label: "Medium",
    variant: "medium",
    title: "Medium App Bar"
  },
  {
    key: "large",
    label: "Large",
    variant: "large",
    title: "Large App Bar"
  }
];

const longTitle = "Very Long App Bar Title That Should Truncate Properly";
const actions: AppBarAction[] = [
  {
    icon: "magnify",
    accessibilityLabel: "Search"
  },
  {
    icon: "dots-vertical",
    accessibilityLabel: "More options"
  }
];

export default function AppBarScreen() {
  const router = useRouter();
  const theme = useTheme();
  const previewStyle = useMemo(
    () => ({
      borderWidth: 1,
      borderColor: theme.colors.outlineVariant,
      borderRadius: theme.shape.cornerMedium,
      overflow: "hidden" as const
    }),
    [theme.colors.outlineVariant, theme.shape.cornerMedium]
  );

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Typography variant="headlineSmall">AppBar Showcase</Typography>

      <View style={styles.section}>
        <Typography variant="titleSmall">Variants</Typography>
        <View style={styles.list}>
          {variants.map((item) => (
            <View key={`base-${item.key}`} style={styles.group}>
              <Typography variant="labelMedium">{item.label}</Typography>
              <View style={previewStyle}>
                <AppBar title={item.title} variant={item.variant} actions={actions} />
              </View>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Typography variant="titleSmall">With Back Button</Typography>
        <View style={styles.list}>
          {variants.map((item) => (
            <View key={`back-${item.key}`} style={styles.group}>
              <Typography variant="labelMedium">{item.label}</Typography>
              <View style={previewStyle}>
                <AppBar
                  title={item.title}
                  variant={item.variant}
                  canGoBack
                  actions={actions}
                  onBackPress={() => router.back()}
                />
              </View>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Typography variant="titleSmall">Elevated</Typography>
        <View style={styles.list}>
          {variants.map((item) => (
            <View key={`elevated-${item.key}`} style={styles.group}>
              <Typography variant="labelMedium">{item.label}</Typography>
              <View style={previewStyle}>
                <AppBar
                  title={item.title}
                  variant={item.variant}
                  elevated
                  canGoBack
                  actions={actions}
                  onBackPress={() => router.back()}
                />
              </View>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Typography variant="titleSmall">Long Title</Typography>
        <View style={styles.list}>
          {variants.map((item) => (
            <View key={`long-${item.key}`} style={styles.group}>
              <Typography variant="labelMedium">{item.label}</Typography>
              <View style={previewStyle}>
                <AppBar
                  title={longTitle}
                  variant={item.variant}
                  canGoBack
                  actions={actions}
                  onBackPress={() => router.back()}
                />
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    padding: 24,
    rowGap: 20
  },
  section: {
    rowGap: 10
  },
  list: {
    rowGap: 16
  },
  group: {
    rowGap: 8
  }
});
