import { MaterialProvider, lightTheme } from "@rn-ui/core";
import { Typography } from "@rn-ui/components";
import { ScrollView, StyleSheet, View } from "react-native";

const variants = [
  "displayLarge",
  "displayMedium",
  "displaySmall",
  "headlineLarge",
  "headlineMedium",
  "headlineSmall",
  "titleLarge",
  "titleMedium",
  "titleSmall",
  "bodyLarge",
  "bodyMedium",
  "bodySmall",
  "labelLarge",
  "labelMedium",
  "labelSmall"
] as const;

function toSentenceCase(value: string) {
  return value
    .replace(/([A-Z])/g, " $1")
    .toLowerCase()
    .replace(/^./, (char) => char.toUpperCase());
}

export default function App() {
  return (
    <MaterialProvider theme={lightTheme}>
      <View style={styles.root}>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.container}
        >
          {variants.map((variant) => (
            <Typography key={variant} variant={variant}>
              {toSentenceCase(variant)}
            </Typography>
          ))}
        </ScrollView>
      </View>
    </MaterialProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: lightTheme.colors.background
  },
  scroll: {
    flex: 1
  },
  container: {
    padding: 24,
    rowGap: 24
  }
});
