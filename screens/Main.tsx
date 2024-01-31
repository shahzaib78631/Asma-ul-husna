import { useContext } from "react";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

// Navigation
import TabsNavigation from "@/navigation/TabsNavigation";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";

// Styles
import useStyles from "@/hooks/useStyles";

// Theme Interface
import { Theme } from "@/types/theme";

// App Context
import { AppContext } from "@/context/AppContext";

export default function MainScreen() {
  // Styles
  const { themeStyles } = useContext(AppContext);
  const styles = useStyles(stylesheet);

  const NavigationTheme = {
    ...DefaultTheme,

    colors: {
      ...DefaultTheme.colors,
      primary: themeStyles.accent,
      text: themeStyles.text.primary,
      background: themeStyles.background.primary,
      card: themeStyles.background.secondary,
    },
  };

  return (
    <NavigationContainer theme={NavigationTheme}>
      <TabsNavigation />
      <StatusBar backgroundColor={themeStyles.accent} style="auto" />
    </NavigationContainer>
  );
}

const stylesheet = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background?.primary,
    },
  });
