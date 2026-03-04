import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { useState, useMemo } from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";

import Colors from "./constants/colors";
import HomeScreen from "./screens/HomeScreen";
import OrderReviewScreen from "./screens/OrderReviewScreen";

export default function App() {
  // load custom fonts //
  const [fontsLoaded] = useFonts({
    Mountain: require("./assets/fonts/Mountain.ttf"),
  });

  const [currentScreen, setCurrentScreen] = useState("Home");
  const [currentPrice, setCurrentPrice] = useState(0);

  const repairTimeRadioButtons = useMemo(
    () => [
      {
        id: "0",
        label: "Standard",
        value: "Standard",
        price: 0,
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
      {
        id: "1",
        label: "Expedited",
        value: "Expedited",
        price: 50,
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
      {
        id: "2",
        label: "Next Day",
        value: "Next Day",
        price: 100,
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
    ],
    []
  );

  const [repairTimeId, setRepairTimeId] = useState(0);

  const [services, setServices] = useState([
    { id: 0, name: "Basic Tune-Up", value: false, price: 50 },
    { id: 1, name: "Comprehensive Tune-Up", value: false, price: 75 },
    { id: 2, name: "Flat Tire Repair", value: false, price: 20 },
    { id: 3, name: "Brake Servicing", value: false, price: 50 },
    { id: 4, name: "Gear Servicing", value: false, price: 40 },
    { id: 5, name: "Chain Servicing", value: false, price: 15 },
    { id: 6, name: "Frame Repair", value: false, price: 35 },
    { id: 7, name: "Safety Check", value: false, price: 25 },
    { id: 8, name: "Accessory Install", value: false, price: 10 },
  ]);

  const [newsletter, setNewsletter] = useState(false);
  const [rentalMembership, setRentalMembership] = useState(false);

  // calculate total price //
  function calculateTotal() {
    let total = 0;

    total += repairTimeRadioButtons[repairTimeId].price;

    services.forEach((s) => {
      if (s.value) total += s.price;
    });

    if (newsletter) total += 0;
    if (rentalMembership) total += 100;

    setCurrentPrice(total);
  }

  // reset all selections //
  function resetOrder() {
    setRepairTimeId(0);
    setServices((prev) => prev.map((s) => ({ ...s, value: false })));
    setNewsletter(false);
    setRentalMembership(false);
    setCurrentPrice(0);
  }

  // return early if fonts not loaded //
  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.primary500} />
      </View>
    );
  }

  // choose which screen to show //
  let screenToShow = null;

  if (currentScreen === "Home") {
    screenToShow = (
      <HomeScreen
        repairTimeRadioButtons={repairTimeRadioButtons}
        repairTimeId={repairTimeId}
        setRepairTimeId={setRepairTimeId}
        services={services}
        setServices={setServices}
        newsletter={newsletter}
        setNewsletter={setNewsletter}
        rentalMembership={rentalMembership}
        setRentalMembership={setRentalMembership}
        calculateTotal={calculateTotal}
        setCurrentScreen={setCurrentScreen}
      />
    );
  }

  if (currentScreen === "OrderReview") {
    screenToShow = (
      <OrderReviewScreen
        repairTime={repairTimeRadioButtons[repairTimeId]}
        services={services}
        newsletter={newsletter}
        rentalMembership={rentalMembership}
        currentPrice={currentPrice}
        resetOrder={resetOrder}
        setCurrentScreen={setCurrentScreen}
      />
    );
  }

  return (
    <NavigationContainer>
      <View style={styles.container}>{screenToShow}</View>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});