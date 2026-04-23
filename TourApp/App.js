import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import AppProvider from './src/context/AppContext';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null; // Expo keeps the splash screen up automatically
  }

  return (
    <AppProvider>
      <AppNavigator />
    </AppProvider>
  );
}