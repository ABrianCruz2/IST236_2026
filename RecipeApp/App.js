import React, { useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";

// Screens
import HomeScreen from "./screens/HomeScreen";
import RecipesScreen from "./screens/RecipesScreen";
import AddRecipeScreen from "./screens/AddRecipeScreen";
import ModalScreen from "./screens/ModalScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [recipes, setRecipes] = useState([]);

  const [fontsLoaded] = useFonts({
    Note: require("./assets/fonts/Note.ttf"),
    Papernotes: require("./assets/fonts/Papernotes.ttf"),
    PapernotesBold: require("./assets/fonts/Papernotes Bold.ttf"),
    PapernotesSketch: require("./assets/fonts/Papernotes Sketch.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* HOME */}
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
        >
          {(props) => <HomeScreen {...props} />}
        </Stack.Screen>

        {/* RECIPES */}
        <Stack.Screen name="Recipes" options={{ title: "Recipes" }}>
          {(props) => (
            <RecipesScreen
              {...props}
              recipes={recipes}
              setRecipes={setRecipes}
            />
          )}
        </Stack.Screen>

        {/* ADD RECIPE */}
        <Stack.Screen name="AddRecipe" options={{ title: "Add Recipe" }}>
          {(props) => <AddRecipeScreen {...props} setRecipes={setRecipes} />}
        </Stack.Screen>

        {/* MODAL SCREEN */}
        <Stack.Screen
          name="RecipeModal"
          options={{
            presentation: "modal",
            title: "Recipe Details",
          }}
        >
          {(props) => <ModalScreen {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
