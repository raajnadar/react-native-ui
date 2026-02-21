import { useRouter } from "expo-router";
import { Button, Typography } from "@rn-ui/components";
import { StyleSheet, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Typography variant="headlineSmall">Components</Typography>
      <View style={styles.list}>
        <Button style={styles.navButton} onPress={() => router.push("/appbar")}>
          AppBar
        </Button>
        <Button style={styles.navButton} onPress={() => router.push("/typography")}>
          Typography
        </Button>
        <Button style={styles.navButton} onPress={() => router.push("/button")}>
          Button
        </Button>
        <Button style={styles.navButton} onPress={() => router.push("/text-field")}>
          TextField
        </Button>
        <Button style={styles.navButton} onPress={() => router.push("/card")}>
          Card
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
  },
  navButton: {
    alignSelf: "stretch"
  }
});
