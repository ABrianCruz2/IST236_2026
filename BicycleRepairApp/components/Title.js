import { Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

export default function Title({ text, small }) {
  // choose font size //
  const fontSize = small ? 18 : 34;

  return (
    <Text style={[styles.title, { fontSize }]}>{text}</Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "Mountain",
    color: "white",
    textAlign: "center",
    marginVertical: 10,
  },
});