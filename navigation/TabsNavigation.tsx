import { useContext } from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Components
import AppText from "@/components/AppText";
import IconButton from "@/components/IconButton";
import { AppContext } from "@/context/AppContext";

// Screens
import FavNamesList from "@/screens/FavNamesList";
import NamesList from "@/screens/NamesList";

// Create bottom tab navigator instance
const Tab = createBottomTabNavigator();

/**
 * TabsNavigation component sets up the navigation structure for the app's bottom tabs.
 * It utilizes the AppContext for theming and dynamically adjusts styles and icons.
 *
 * @returns {React.ReactElement} - A React Navigation Bottom Tab Navigator with custom styling and icons.
 */
function TabsNavigation(): React.ReactElement {
  const { themeStyles } = useContext(AppContext);

  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerShown: true,
        headerStyle: {
          backgroundColor: themeStyles.accent,
          borderBottomEndRadius: 20,
          borderBottomStartRadius: 20,
          height: 120,
        },
        tabBarStyle: {
          height: 60,
          borderTopColor: themeStyles.text.secondary,
        },
        tabBarLabel: ({ color, children }) => (
          <AppText.English style={{ bottom: 5 }} size={12} color={color}>
            {children}
          </AppText.English>
        ),
      }}
    >
      {/* Tab Screen for Names */}
      <Tab.Screen
        name="Names"
        options={{
          headerTitle: () => (
            <AppText.Arabic size={24} color={themeStyles.text.primary}>
              الأَسْمَاء الْحُسْنَى
            </AppText.Arabic>
          ),
          tabBarIcon: ({ color, size, focused }) => (
            <IconButton
              disabled={true}
              library="MaterialCommunityIcons"
              name={focused ? "book" : "book-outline"}
              color={color}
              size={size}
            />
          ),
        }}
        component={NamesList}
      />
      {/* Tab Screen for Favourites */}
      <Tab.Screen
        name="Favourites"
        options={{
          headerTitle: ({ children }) => (
            <AppText.English size={24} color={themeStyles.text.primary}>
              {children}
            </AppText.English>
          ),
          tabBarIcon: ({ color, size, focused }) => (
            <View style={{ paddingRight: 2 }}>
              <IconButton
                disabled={true}
                library="MaterialCommunityIcons"
                name={focused ? "heart" : "heart-outline"}
                color={color}
                size={size}
              />
            </View>
          ),
        }}
        component={FavNamesList}
      />
    </Tab.Navigator>
  );
}

export default TabsNavigation;
