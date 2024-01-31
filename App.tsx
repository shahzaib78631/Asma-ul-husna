// Use Expo Fonts
import { useFonts } from "expo-font";

// App COntext
import { AppProvider } from "./context/AppContext";

// Screen
import MainScreen from "./screens/Main";

export default function App() {
  // Load fonts
  const [fontsLoaded, fontError] = useFonts({
    ArabicRegular: require("./assets/fonts/arabic-regular.otf"),
    English: require("./assets/fonts/english.ttf"),
  });

  // If fonts are not loaded, return null
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <AppProvider>
      <MainScreen />
    </AppProvider>
  );
}
