import { Button, Typography } from "@rn-ui/components";
import { StyleSheet, View } from "react-native";

const variants = ["filled", "tonal", "outlined", "text"] as const;

export default function ButtonScreen() {
  return (
    <View style={styles.container}>
      <Typography variant="headlineSmall">Button Showcase</Typography>
      <View style={styles.list}>
        {variants.map((variant) => (
          <View key={variant} style={styles.group}>
            <Typography variant="titleSmall">{variant}</Typography>
            <Button variant={variant}>{`${variant} button`}</Button>
            <Button variant={variant} disabled>
              {`${variant} button disabled`}
            </Button>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    rowGap: 20
  },
  list: {
    rowGap: 12
  },
  group: {
    rowGap: 8
  }
});
