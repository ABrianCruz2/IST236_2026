import { View, Text, Image, StyleSheet } from "react-native";
import colors from "../constants/colors";

export default function MenuItem({ name, price, image }) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>${price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGray,
    padding: 12,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
  name: {
    fontFamily: "RestaurantFont",
    fontSize: 20,
    color: colors.textDark,
    marginTop: 8,
  },
  price: {
    fontFamily: "RestaurantFont",
    fontSize: 18,
    color: colors.secondaryYellow,
    marginTop: 4,
  },
});