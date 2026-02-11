import { useRouter } from "expo-router";
import { Button, Typography } from "@rn-ui/components";
import { StyleSheet, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Typography variant="headlineSmall">Components</Typography>
      <View style={styles.list}>
        <Button variant="outlined" onPress={() => router.push("/typography")}>
          Typography
        </Button>
        <Button variant="outlined" onPress={() => router.push("/button")}>
          Button
        </Button>
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
  }
});
