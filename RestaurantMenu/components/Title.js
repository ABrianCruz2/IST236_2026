import { Text, StyleSheet } from "react-native";
import colors from "../constants/colors";

export default function Title({ text }) {
  return <Text style={styles.title}>{text}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "RestaurantFont",
    fontSize: 28,
    color: colors.primaryRed,
    textAlign: "center",
    marginVertical: 10,
  },
});