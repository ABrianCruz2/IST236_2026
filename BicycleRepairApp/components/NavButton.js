import { Pressable, Text, StyleSheet, View } from "react-native";
import Colors from "../constants/colors";

export default function NavButton({ text, onPress }) {
  // handle button press //
  return (
    <View style={styles.outer}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.pressed,
        ]}
        onPress={onPress}
      >
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    marginVertical: 20,
    alignItems: "center",
  },
  button: {
    backgroundColor: Colors.primary500,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  pressed: {
    opacity: 0.7,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontFamily: "Mountain",
  },
});