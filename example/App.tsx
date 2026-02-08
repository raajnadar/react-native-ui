import { MaterialProvider, darkTheme } from "@react-native-ui/core";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <MaterialProvider theme={darkTheme}>
      <View style={styles.container}>
        <Text style={styles.title}>React Native UI Example</Text>
      </View>
    </MaterialProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: darkTheme.colors.background,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#FFF",
  }
});
