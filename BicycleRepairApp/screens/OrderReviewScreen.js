import { StyleSheet, View, Text, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../constants/colors";

import Title from "../components/Title";
import NavButton from "../components/NavButton";

export default function OrderReviewScreen({
  repairTime,
  services,
  newsletter,
  rentalMembership,
  currentPrice,
  resetOrder,
  setCurrentScreen,
}) {
  // calculate tax and final total //
  const tax = currentPrice * 0.06;
  const finalTotal = currentPrice + tax;

  // return home //
  function goHome() {
    resetOrder();
    setCurrentScreen("Home");
  }

  return (
    <View style={styles.darkBackground}>
      <ScrollView contentContainerStyle={styles.container}>
        <Title text="Order Review" />

        {/* selected service time */}
        <View style={styles.section}>
          <Text style={styles.label}>Service Time:</Text>
          <Text style={styles.value}>
            {repairTime.label} (${repairTime.price})
          </Text>
        </View>

        {/* selected services */}
        <View style={styles.section}>
          <Text style={styles.label}>Selected Services:</Text>
          {services
            .filter((s) => s.value)
            .map((s) => (
              <Text key={s.id} style={styles.value}>
                {s.name} (${s.price})
              </Text>
            ))}
        </View>

        {/* switches */}
        <View style={styles.section}>
          {newsletter && (
            <Text style={styles.value}>Newsletter Signup ($0)</Text>
          )}
          {rentalMembership && (
            <Text style={styles.value}>Rental Membership ($100)</Text>
          )}
        </View>

        {/* totals */}
        <View style={styles.section}>
          <Text style={styles.label}>Subtotal: ${currentPrice.toFixed(2)}</Text>
          <Text style={styles.label}>Tax (6%): ${tax.toFixed(2)}</Text>
          <Text style={styles.total}>Final Total: ${finalTotal.toFixed(2)}</Text>
        </View>

        {/* return home */}
        <NavButton text="Return Home" onPress={goHome} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    padding: 20,
  },
  section: {
    marginVertical: 15,
  },
  label: {
    fontSize: 18,
    color: "white",
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    color: "white",
    marginLeft: 10,
  },
  total: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    marginTop: 10,
  },
  darkBackground: {
  flex: 1,
  backgroundColor: "#222222", 
  },


});