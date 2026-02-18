// screens/MenuScreen.js
import { View, FlatList, StyleSheet, TouchableOpacity, Text } from "react-native";
import MenuItem from "../components/MenuItem";
import Title from "../components/Title";
import colors from "../constants/colors";

export default function MenuScreen({ navigation }) {
  const menuData = [
    { id: "1", name: "Cheeseburger", price: "8.99", image: require("../assets/images/cheeseburger.jpg") },
    { id: "2", name: "Chicken Sandwich", price: "7.99", image: require("../assets/images/chickensandwich.jpg") },
    { id: "3", name: "Fries", price: "3.49", image: require("../assets/images/fries.jpg") },
    { id: "4", name: "Hotdog", price: "4.99", image: require("../assets/images/hotdog.jpg") },
    { id: "5", name: "Salad", price: "6.49", image: require("../assets/images/salad.jpg") },
    { id: "6", name: "Drink", price: "1.99", image: require("../assets/images/drink.jpg") },
  ];

  return (
    <View style={styles.container}>
      <Title text="Menu" />

      <FlatList
        data={menuData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MenuItem name={item.name} price={item.price} image={item.image} />
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundWhite,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: colors.primaryRed,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 20,
  },
  buttonText: {
    fontFamily: "RestaurantFont",
    fontSize: 20,
    color: colors.backgroundWhite,
  },
});