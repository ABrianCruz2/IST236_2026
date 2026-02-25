import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function RecipeItem({ recipe, onView, onDelete }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{recipe.title}</Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.viewButton} onPress={onView}>
          <Text style={styles.buttonText}>View</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 12,
    marginVertical: 6,
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 10,
  },
  viewButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  deleteButton: {
    backgroundColor: "#d9534f",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  buttonText: {
    color: "white",
    fontSize: 14,
  },
});