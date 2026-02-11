import { Slot } from "expo-router";
import { MaterialProvider, lightTheme } from "@rn-ui/core";

export default function RootLayout() {
  return (
    <MaterialProvider theme={lightTheme}>
      <Slot />
    </MaterialProvider>
  );
}
