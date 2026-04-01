// navigation/TabNavigator.js
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import USNewsScreen from '../screens/USNewsScreen';
import WorldNewsScreen from '../screens/WorldNewsScreen';
import TechNewsScreen from '../screens/TechNewsScreen';
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="USNews" component={USNewsScreen} options={{ title: 'US' }} />
      <Tab.Screen name="WorldNews" component={WorldNewsScreen} options={{ title: 'World' }} />
      <Tab.Screen name="TechNews" component={TechNewsScreen} options={{ title: 'Tech' }} />
    </Tab.Navigator>
  );
}

export default TabNavigator;