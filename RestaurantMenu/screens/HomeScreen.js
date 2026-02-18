// screens/HomeScreen.js
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from "react-native";
import Title from "../components/Title";
import colors from "../constants/colors";

export default function HomeScreen({ navigation }) {
  const handleCall = () => Linking.openURL("tel:8435551234");
  const handleAddress = () =>
    Linking.openURL("https://www.google.com/maps/search/?api=1&query=BurgerHome");
  const handleWebsite = () => Linking.openURL("https://www.burgerking.com");

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/burgerhome.jpg")}
        style={styles.image}
      />

      <Title text="BurgerHome" />

      <TouchableOpacity onPress={handleCall}>
        <Text style={styles.link}>Call: (843) 555‑1234</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleAddress}>
        <Text style={styles.link}>123 Main St, Murrells Inlet</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleWebsite}>
        <Text style={styles.link}>Visit Website</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Menu")}
      >
        <Text style={styles.buttonText}>View Menu</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundWhite,
    alignItems: "center",
    paddingTop: 40,
  },
  image: {
    width: 250,
    height: 150,
    resizeMode: "contain",
  },
  link: {
    fontFamily: "RestaurantFont",
    fontSize: 18,
    color: colors.primaryRed,
    marginVertical: 6,
  },
  button: {
    marginTop: 30,
    backgroundColor: colors.secondaryYellow,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: "RestaurantFont",
    fontSize: 20,
    color: colors.textDark,
  },
});