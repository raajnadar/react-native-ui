import { Button, IconButton, Typography } from "@rn-ui/components";
import { ScrollView, StyleSheet, View } from "react-native";

const variants = ["filled", "tonal", "outlined", "text"] as const;
const iconVariants = [
  { label: "Filled", value: "filled" },
  { label: "Tonal", value: "tonal" },
  { label: "Outlined", value: "outlined" },
  { label: "Standard", value: "standard" }
] as const;

export default function ButtonScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Typography variant="headlineSmall">Button Showcase</Typography>

      <View style={styles.section}>
        <Typography variant="titleSmall">Variants</Typography>
        <View style={styles.items}>
          {variants.map((variant) => (
            <Button key={variant} variant={variant}>
              {`${variant} button`}
            </Button>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Typography variant="titleSmall">Disabled Variants</Typography>
        <View style={styles.items}>
          {variants.map((variant) => (
            <Button key={`disabled-${variant}`} variant={variant} disabled>
              {`${variant} button`}
            </Button>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Typography variant="titleSmall">IconButton: Variants</Typography>
        <View style={styles.iconGrid}>
          {iconVariants.map((option) => (
            <View key={option.value} style={styles.iconCell}>
              <IconButton icon="heart-outline" variant={option.value} />
              <Typography variant="labelSmall">{option.label}</Typography>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Typography variant="titleSmall">IconButton: States</Typography>
        <View style={styles.stateGrid}>
          {iconVariants.map((option) => (
            <View key={`state-${option.value}`} style={styles.stateRow}>
              <Typography variant="labelSmall">{option.label}</Typography>
              <View style={styles.stateIcons}>
                <IconButton icon="heart-outline" variant={option.value} />
                <IconButton icon="heart-outline" variant={option.value} disabled />
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
  items: {
    rowGap: 8
  },
  iconGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: 12,
    columnGap: 12
  },
  iconCell: {
    minWidth: 60,
    alignItems: "center",
    rowGap: 6
  },
  stateGrid: {
    rowGap: 12
  },
  stateRow: {
    rowGap: 6
  },
  stateIcons: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 12
  }
});
