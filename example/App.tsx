import { MaterialProvider, darkTheme, lightTheme } from "@react-native-ui/core";
import { Typography } from "@rn-ui/typography";
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

export default function App() {
  return (
    <MaterialProvider theme={darkTheme}>
      <ScrollView contentContainerStyle={styles.container}>
        {variants.map((variant) => (
          <View key={variant} style={styles.item}>
            <Typography variant={variant} style={styles.label}>
              {variant}
            </Typography>
            <Typography variant={variant}>
              The quick brown fox jumps over the lazy dog.
            </Typography>
          </View>
        ))}
      </ScrollView>
    </MaterialProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    rowGap: 24,
    backgroundColor: lightTheme.colors.background
  },
  item: {
    rowGap: 4
  },
  label: {
    color: lightTheme.colors.primary
  }
});
