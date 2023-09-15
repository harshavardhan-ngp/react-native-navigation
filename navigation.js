import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Feed from "./screens/tabScreens/Feed";
import Settings from "./screens/tabScreens/Settings";
import Notifications from "./screens/tabScreens/Notifications";
import Payments from "./screens/drawerScreens/Payments";
import TweetDetailsScreen from "./screens/homeStack/TweetDetailsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from "@expo/vector-icons/Ionicons";

const hStack = createNativeStackNavigator();
function HStackGrp() {
  return (
    <hStack.Navigator>
      <hStack.Screen
        name="TabGrp"
        component={TabGrp}
        options={{ headerShown: false }}
      ></hStack.Screen>
      <hStack.Screen
        name="TweetDetailsScreen"
        component={TweetDetailsScreen}
        options={{ presentation: "modal" }}
      ></hStack.Screen>
    </hStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function TabGrp() {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, focused, size }) => {
          let iName;
          if (route.name === "Feed") {
            iName = focused ? "home" : "home-outline";
          } else if (route.name === "Settings") {
            iName = focused ? "settings" : "ios-settings-sharp";
          } else {
            iName = focused ? "ios-notifications" : "ios-notifications-outline";
          }
          return <Ionicons name={iName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#1DA1F2",
      })}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{ tabBarLabel: "@harsha" }}
      ></Tab.Screen>
      <Tab.Screen name="Settings" component={Settings}></Tab.Screen>
      <Tab.Screen name="Notifications" component={Notifications}></Tab.Screen>
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();
function DraGrp() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Drawer" component={HStackGrp} />
      <Drawer.Screen
        name="Payment"
        component={Payments}
        options={{ headerShown: true }}
      />
    </Drawer.Navigator>
  );
}
export default function Navigation() {
  return (
    <NavigationContainer>
      <DraGrp />
    </NavigationContainer>
  );
}
