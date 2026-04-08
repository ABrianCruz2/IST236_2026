// App.js
import { useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CustomDrawerLayout from './navigation/CustomDrawerLayout';
import NewsDetailScreen from './screens/NewsDetailScreen';

// import the bookmarks context provider //
import { BookmarksContextProvider } from './store/context/bookmarks-context';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // load custom fonts before the app renders //
  async function loadFonts() {
    await Font.loadAsync({
      'open-sans': require('./assets/fonts/Playfair.ttf'),
      'open-sans-bold': require('./assets/fonts/PlayfairBold.ttf'),
    });
    setFontsLoaded(true);
  }

  // while fonts are still loading, show a simple loading screen //
  if (!fontsLoaded) {
    loadFonts();
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // once fonts are ready, wrap the entire app in the bookmarks provider //
  return (
    <BookmarksContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {/* this is the root of the app's navigation and loads my drawer layout */}
          <Stack.Screen
            name="DrawerRoot"
            component={CustomDrawerLayout}
            options={{ headerShown: false }}
          />

          {/* this screen shows the full details for a selected news item */}
          <Stack.Screen
            name="NewsDetail"
            component={NewsDetailScreen}
            options={{ title: 'News Detail' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </BookmarksContextProvider>
  );
}