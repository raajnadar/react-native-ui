import { MaterialProvider, lightTheme } from "@react-native-ui/core";
import { Typography } from "@react-native-ui/typography";
import { ScrollView, StyleSheet } from "react-native";

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
      <ScrollView contentContainerStyle={styles.container}>
        {variants.map((variant) => (
          <Typography key={variant} variant={variant}>
            {toSentenceCase(variant)}
          </Typography>
        ))}
      </ScrollView>
    </MaterialProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    rowGap: 24
  }
});
