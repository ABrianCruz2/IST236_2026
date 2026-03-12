import { Text, StyleSheet } from "react-native";
import colors from "../constants/colors";

export default function Title({ text, small }) {
  const fontSize = small ? 18 : 32;

  return <Text style={[styles.title, { fontSize }]}>{text}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "Mountain",
    color: colors.primaryText,
    textAlign: "center",
    marginVertical: 10,
  },
});