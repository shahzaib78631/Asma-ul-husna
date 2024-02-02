import { useCallback } from "react";

// Use Expo Fonts
import { useFonts } from "expo-font";

// Use Expo Splash Screen
import * as SplashScreen from "expo-splash-screen";

// App COntext
import { AppProvider } from "./context/AppContext";

// Screen
import MainScreen from "./screens/Main";
import { View } from "react-native";

// Prevent auto hideing of splash screen
SplashScreen.preventAutoHideAsync();

// Main App Component
export default function App() {
  // Load fonts
  const [fontsLoaded, fontError] = useFonts({
    ArabicRegular: require("./assets/fonts/arabic-regular.otf"),
    English: require("./assets/fonts/english.ttf"),
  });

  // Hide splash screen when fonts are loaded
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // If fonts are not loaded, return null
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <AppProvider>
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <MainScreen />
      </View>
    </AppProvider>
  );
}
