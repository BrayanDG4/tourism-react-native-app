import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

//screens
import { HomeScreen } from "../screens/HomeScreen";
import { RestaurantScreen } from "../screens/RestaurantScreen";
import { TourismScreen } from "../screens/TourismScreen";
import { HotelsScreen } from "../screens/HotelsScreen";
import { DrugStoreScreen } from "../screens/DrugStoreScreen";
import { CommercialAlliesScreen } from "../screens/CommercialAlliesScreen";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const TabScreen1 = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#1073DB",
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Aliados"
        component={CommercialAlliesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const TabScreen2 = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#1073DB",
      }}
    >
      <Tab.Screen
        name="Comidas"
        component={RestaurantScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="fast-food-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Turismo"
        component={TourismScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="airplane-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Hoteles"
        component={HotelsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="bed-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Droguerías"
        component={DrugStoreScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

function DrawerScreen() {
  return (
    <Drawer.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <Drawer.Screen name="Principal">{() => <TabScreen1 />}</Drawer.Screen>
      <Drawer.Screen name="Servicios">{() => <TabScreen2 />}</Drawer.Screen>
    </Drawer.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer style={styles.droidSafeArea}>
      <DrawerScreen />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
});
