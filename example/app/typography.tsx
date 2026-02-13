import { Typography } from "@rn-ui/components";
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

const toSentenceCase = (value: string) => {
  const normalized = value.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase();
  return normalized.charAt(0).toUpperCase() + normalized.slice(1);
};

export default function TypographyScreen() {
  return (
    <ScrollView contentContainerStyle={styles.content}>
      {variants.map((variant) => (
        <Typography key={variant} variant={variant}>
          {toSentenceCase(variant)}
        </Typography>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 24,
    rowGap: 8
  }
});
