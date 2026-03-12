import { useState } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  // Load custom font
  const [fontsLoaded] = useFonts({
    Mountain: require("./assets/fonts/Mountain.ttf"),
  });

  // App-level state
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [guests, setGuests] = useState(1);
  const [campsites, setCampsites] = useState(1);

  // Picker visibility
  const [showCheckInPicker, setShowCheckInPicker] = useState(false);
  const [showCheckOutPicker, setShowCheckOutPicker] = useState(false);
  const [showGuestPicker, setShowGuestPicker] = useState(false);
  const [showCampsitePicker, setShowCampsitePicker] = useState(false);

  // Wait for fonts to load
  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#663300" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <HomeScreen
        checkInDate={checkInDate}
        setCheckInDate={setCheckInDate}
        checkOutDate={checkOutDate}
        setCheckOutDate={setCheckOutDate}
        guests={guests}
        setGuests={setGuests}
        campsites={campsites}
        setCampsites={setCampsites}
        showCheckInPicker={showCheckInPicker}
        setShowCheckInPicker={setShowCheckInPicker}
        showCheckOutPicker={showCheckOutPicker}
        setShowCheckOutPicker={setShowCheckOutPicker}
        showGuestPicker={showGuestPicker}
        setShowGuestPicker={setShowGuestPicker}
        showCampsitePicker={showCampsitePicker}
        setShowCampsitePicker={setShowCampsitePicker}
      />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});