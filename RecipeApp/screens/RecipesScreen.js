import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import RecipeItem from "../components/RecipeItem";

export default function RecipesScreen({ navigation, recipes, setRecipes }) {
  const deleteRecipe = (id) => {
    setRecipes((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recipes</Text>

      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <RecipeItem
            recipe={item}
            onView={() => navigation.navigate("RecipeModal", { recipe: item })}
            onDelete={() => deleteRecipe(item.id)}
          />
        )}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("AddRecipe")}
      >
        <Text style={styles.buttonText}>Add Recipe</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#555" }]}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
});