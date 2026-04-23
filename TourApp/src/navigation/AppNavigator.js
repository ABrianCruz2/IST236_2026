import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import TourOptionsScreen from '../screens/TourOptionsScreen';
import TourInfoScreen from '../screens/TourInfoScreen';
import StopDetailsScreen from '../screens/StopDetailsScreen';
import BookingScreen from '../screens/BookingScreen';
import BookingConfirmationScreen from '../screens/BookingConfirmationScreen';
import MyBookingsScreen from '../screens/MyBookingsScreen';
import FlyerScreen from '../screens/FlyerScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TourOptions" component={TourOptionsScreen} />
        <Stack.Screen name="TourInfo" component={TourInfoScreen} />
        <Stack.Screen name="StopDetails" component={StopDetailsScreen} />
        <Stack.Screen name="Booking" component={BookingScreen} />
        <Stack.Screen name="BookingConfirmation" component={BookingConfirmationScreen} />
        <Stack.Screen name="MyBookings" component={MyBookingsScreen} />
        <Stack.Screen name="Flyer" component={FlyerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}