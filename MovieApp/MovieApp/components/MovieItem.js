import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function MovieItem({ title, image, rating }) {
  return (
    <View style={styles.itemContainer}>
      <Image source={image} style={styles.poster} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.rating}>Rating: {rating}/10</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    backgroundColor: "#f0f0f0",
    padding: 12,
    marginVertical: 8,
    borderRadius: 10,
    alignItems: "center",
    elevation: 3,
  },
  poster: {
    width: 80,
    height: 120,
    borderRadius: 8,
  },
  infoContainer: {
    marginLeft: 12,
    flexShrink: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6,
  },
  rating: {
    fontSize: 16,
    color: "#555",
  },
});