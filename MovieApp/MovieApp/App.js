import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import MovieItem from "./components/MovieItem";
import React, { useState } from "react";



export default function App() {
  const [movieItems, setMovieItems] = useState([
    {
      name: "Avengers: Age of Ultron",
      image: require("./assets/images/avengersageofultron_lob_crd_03.jpg"),
      rating: "10",
    },
    {
      name: "Captain America: The First Avenger",
      image: require("./assets/images/captainamerica_lob_crd_01.jpg"),
      rating: "5",
    },
    {
      name: "Captain America: Civil War",
      image: require("./assets/images/captainamericacivilwar_lob_crd_01_9.jpg"),
      rating: "6",
    },
    {
      name: "Captain America: The Winter Soldier",
      image: require("./assets/images/captainamericathewintersoldier_lob_crd_01_1.jpg"),
      rating: "1",
    },
    {
      name: "Guardians of the Galaxy",
      image: require("./assets/images/guardiansofthegalaxy_lob_crd_03.jpg"),
      rating: "3",
    },
    {
      name: "Guardians of the Galaxy Vol. 2",
      image: require("./assets/images/guardiansofthegalaxyvol.2_lob_crd_01.jpg"),
      rating: "4",
    },
    {
      name: "Iron Man",
      image: require("./assets/images/ironman_lob_crd_01_3.jpg"),
      rating: "2",
    },
    {
      name: "The Avengers",
      image: require("./assets/images/theavengers_lob_crd_03.jpg"),
      rating: "7",
    },
    {
      name: "The Incredible Hulk",
      image: require("./assets/images/theincrediblehulk_lob_crd_03.jpg"),
      rating: "9",
    },
    {
      name: "Thor",
      image: require("./assets/images/thor_lob_crd_01.jpg"),
      rating: "8",
    },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Top 10 Marvel Movies</Text>

      <FlatList
        data={movieItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <MovieItem
            title={item.name}
            image={item.image}
            rating={item.rating}
          />
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
});