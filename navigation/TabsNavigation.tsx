import AppText from "@/components/AppText";
import IconButton from "@/components/IconButton";
import { AppContext } from "@/context/AppContext";
import FavNamesList from "@/screens/FavNamesList";
import NamesList from "@/screens/NamesList";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useContext } from "react";
import { View } from "react-native";

// Create bottom tab navigator
const Tab = createBottomTabNavigator();

function TabsNavigation() {
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
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="Names"
        options={{
          headerTitle: () => (
            <AppText.Arabic size={24} color={themeStyles.text.primary}>
              {" "}
              الأَسْمَاء الْحُسْنَى
            </AppText.Arabic>
          ),
          tabBarIcon: ({ color, size, focused }) => (
            <IconButton
              disabled={true}
              Component="MaterialCommunityIcons"
              name={focused ? "book" : "book-outline"}
              color={color}
              size={size}
            />
          ),
        }}
        component={NamesList}
      />
      <Tab.Screen
        options={{
          headerShown: false,
        }}
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
                Component="MaterialCommunityIcons"
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
