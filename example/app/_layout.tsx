import { Slot } from "expo-router";
import { MaterialProvider, lightTheme } from "@rn-ui/core";
import { Layout } from "@rn-ui/components";

export default function RootLayout() {
  return (
    <MaterialProvider theme={lightTheme}>
      <Layout>
        <Slot />
      </Layout>
    </MaterialProvider>
  );
}
