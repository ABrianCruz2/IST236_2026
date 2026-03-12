import { Pressable, Text, StyleSheet, View } from "react-native";
import colors from "../constants/colors";

export default function NavButton({ title, onPress }) {
  return (
    <View style={styles.outer}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.pressed,
        ]}
        onPress={onPress}
      >
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    marginVertical: 10,
    alignItems: "center",
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  pressed: {
    opacity: 0.7,
  },
  text: {
    color: colors.buttonText,
    fontSize: 18,
    fontFamily: "Mountain",
  },
});