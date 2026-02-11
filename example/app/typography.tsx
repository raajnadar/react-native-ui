import { Typography } from "@rn-ui/components";
import { ScrollView } from "react-native";

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

export default function TypographyScreen() {
  return (
    <ScrollView>
      {variants.map((variant) => (
        <Typography key={variant} variant={variant}>
          {variant}
        </Typography>
      ))}
    </ScrollView>
  );
}
