import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import VacationOverviewScreen from '../screens/VacationOverviewScreen';
import Colors from '../constants/colors';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: Colors.darkBlue },
          headerTintColor: Colors.white,
          contentStyle: { backgroundColor: Colors.gray100 },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Countries' }}
        />

        <Stack.Screen
          name="VacationOverview"
          component={VacationOverviewScreen}
          options={{ title: 'Destinations' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;