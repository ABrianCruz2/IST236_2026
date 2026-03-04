import { StyleSheet, View, ImageBackground, ScrollView } from "react-native";
import { RadioGroup } from "react-native-radio-buttons-group";
import Checkbox from "expo-checkbox";
import { Switch } from "react-native";
import Colors from "../constants/colors";

import Title from "../components/Title";
import NavButton from "../components/NavButton";

export default function HomeScreen({
  repairTimeRadioButtons,
  repairTimeId,
  setRepairTimeId,
  services,
  setServices,
  newsletter,
  setNewsletter,
  rentalMembership,
  setRentalMembership,
  calculateTotal,
  setCurrentScreen,
}) {
  // build stable radio array //
  const radioButtons = repairTimeRadioButtons.map((btn) => ({
    ...btn,
  }));

  // toggle checkbox //
  function toggleService(id) {
    setServices((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, value: !s.value } : s
      )
    );
  }

  // submit order //
  function submitOrder() {
    calculateTotal();
    setCurrentScreen("OrderReview");
  }

  return (
    <ImageBackground
      source={require("../assets/images/bicyclerepair.jpg")}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <ScrollView contentContainerStyle={styles.container}>
          <Title text="Bicycle Repair Shop" />

          {/* radio buttons */}
          <View style={styles.section}>
            <RadioGroup
              radioButtons={radioButtons}
              selectedId={repairTimeId.toString()}
              onPress={(id) => setRepairTimeId(parseInt(id))}
              labelStyle={{ color: "white", fontSize: 18 }}
            />
          </View>

          {/* checkboxes */}
          <View style={styles.section}>
            {services.map((service) => (
              <View key={service.id} style={styles.checkboxRow}>
                <Checkbox
                  value={service.value}
                  onValueChange={() => toggleService(service.id)}
                  color={service.value ? Colors.primary500 : undefined}
                />
                <View style={styles.checkboxLabelContainer}>
                  <Title small text={`${service.name} ($${service.price})`} />
                </View>
              </View>
            ))}
          </View>

          {/* switches */}
          <View style={styles.section}>
            <View style={styles.switchRow}>
              <Title small text="Newsletter Signup ($0)" />
              <Switch
                value={newsletter}
                onValueChange={setNewsletter}
                trackColor={{ true: Colors.primary500 }}
              />
            </View>

            <View style={styles.switchRow}>
              <Title small text="Rental Membership ($100)" />
              <Switch
                value={rentalMembership}
                onValueChange={setRentalMembership}
                trackColor={{ true: Colors.primary500 }}
              />
            </View>
          </View>

          {/* submit button */}
          <NavButton text="Submit Order" onPress={submitOrder} />
        </ScrollView>
      </View> 
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    padding: 20,
  },
  section: {
    marginVertical: 20,
  },
  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 6,
  },
  checkboxLabelContainer: {
    marginLeft: 10,
  },
  switchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
  },
});