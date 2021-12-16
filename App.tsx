import { ApplicationProvider } from "@ui-kitten/components";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as eva from "@eva-design/eva";

import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/navigation";
import useThemeStore from "./src/stores/useThemeStore";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const { theme } = useThemeStore();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <ApplicationProvider {...eva} theme={theme}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </ApplicationProvider>
      </SafeAreaProvider>
    );
  }
}
