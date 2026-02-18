// screens/AppNav.js
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import MenuScreen from "./MenuScreen";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Menu" component={MenuScreen} />
    </Stack.Navigator>
  );
}