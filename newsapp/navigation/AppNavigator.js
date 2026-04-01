// this is the top-level stack navigator //
// it links to the drawer navigator and the news detail screen //

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DrawerNavigator from './DrawerNavigator';
import NewsDetailScreen from '../screens/NewsDetailScreen';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen
          name="Drawer"
          component={DrawerNavigator}
          options={{
            // hide header because drawer + tabs will handle their own //
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="NewsDetail"
          component={NewsDetailScreen}
          options={{
            title: 'News Details',
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;