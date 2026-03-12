import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Modal,
  Pressable,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

import Title from "../components/Title";
import NavButton from "../components/NavButton";
import colors from "../constants/colors";

function HomeScreen(props) {
  const {
    checkInDate,
    setCheckInDate,
    checkOutDate,
    setCheckOutDate,
    guests,
    setGuests,
    campsites,
    setCampsites,
    showCheckInPicker,
    setShowCheckInPicker,
    showCheckOutPicker,
    setShowCheckOutPicker,
    showGuestPicker,
    setShowGuestPicker,
    showCampsitePicker,
    setShowCampsitePicker,
  } = props;

  const [reservationSummary, setReservationSummary] = useState("");

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const years = Array.from({ length: 11 }, (_, i) => 2020 + i);

  const [tempCheckInMonth, setTempCheckInMonth] = useState(
    checkInDate.getMonth()
  );
  const [tempCheckInDay, setTempCheckInDay] = useState(checkInDate.getDate());
  const [tempCheckInYear, setTempCheckInYear] = useState(
    checkInDate.getFullYear()
  );

  const [tempCheckOutMonth, setTempCheckOutMonth] = useState(
    checkOutDate.getMonth()
  );
  const [tempCheckOutDay, setTempCheckOutDay] = useState(
    checkOutDate.getDate()
  );
  const [tempCheckOutYear, setTempCheckOutYear] = useState(
    checkOutDate.getFullYear()
  );

  function daysInMonth(year, monthIndex) {
    return new Date(year, monthIndex + 1, 0).getDate();
  }

  function formatDate(date) {
    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }

  function handleReserveNow() {
    const summary = `Reservation Details:
Check-In: ${formatDate(checkInDate)}
Check-Out: ${formatDate(checkOutDate)}
Guests: ${guests}
Campsites: ${campsites}`;
    setReservationSummary(summary);
  }

  function openCheckInPicker() {
    setTempCheckInMonth(checkInDate.getMonth());
    setTempCheckInDay(checkInDate.getDate());
    setTempCheckInYear(checkInDate.getFullYear());
    setShowCheckInPicker(true);
  }

  function openCheckOutPicker() {
    setTempCheckOutMonth(checkOutDate.getMonth());
    setTempCheckOutDay(checkOutDate.getDate());
    setTempCheckOutYear(checkOutDate.getFullYear());
    setShowCheckOutPicker(true);
  }

  function confirmCheckIn() {
    const maxDay = daysInMonth(tempCheckInYear, tempCheckInMonth);
    const safeDay = Math.min(tempCheckInDay, maxDay);
    const newDate = new Date(tempCheckInYear, tempCheckInMonth, safeDay);
    setCheckInDate(newDate);
    setShowCheckInPicker(false);
  }

  function confirmCheckOut() {
    const maxDay = daysInMonth(tempCheckOutYear, tempCheckOutMonth);
    const safeDay = Math.min(tempCheckOutDay, maxDay);
    const newDate = new Date(tempCheckOutYear, tempCheckOutMonth, safeDay);
    setCheckOutDate(newDate);
    setShowCheckOutPicker(false);
  }

  const checkInDays = Array.from(
    { length: daysInMonth(tempCheckInYear, tempCheckInMonth) },
    (_, i) => i + 1
  );
  const checkOutDays = Array.from(
    { length: daysInMonth(tempCheckOutYear, tempCheckOutMonth) },
    (_, i) => i + 1
  );

  return (
    <ImageBackground
      source={require("../assets/images/camping.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Title text="Mountain View Campground" />

          <View style={styles.section}>
            <Text style={styles.label}>Check-In</Text>
            <Pressable onPress={openCheckInPicker}>
              <Text style={styles.valueText}>{formatDate(checkInDate)}</Text>
            </Pressable>
          </View>

          <View style={styles.section}>
            <Text style={styles.label}>Check-Out</Text>
            <Pressable onPress={openCheckOutPicker}>
              <Text style={styles.valueText}>{formatDate(checkOutDate)}</Text>
            </Pressable>
          </View>

          <View style={styles.section}>
            <Text style={styles.label}>Number of Guests</Text>
            <Pressable onPress={() => setShowGuestPicker(true)}>
              <Text style={styles.valueText}>{guests}</Text>
            </Pressable>
          </View>

          <View style={styles.section}>
            <Text style={styles.label}>Number of Campsites</Text>
            <Pressable onPress={() => setShowCampsitePicker(true)}>
              <Text style={styles.valueText}>{campsites}</Text>
            </Pressable>
          </View>

          <View style={styles.buttonContainer}>
            <NavButton title="Reserve Now" onPress={handleReserveNow} />
          </View>

          {reservationSummary.length > 0 && (
            <View style={styles.summaryContainer}>
              <Text style={styles.summaryText}>{reservationSummary}</Text>
            </View>
          )}

          <Modal visible={showCheckInPicker} transparent animationType="fade">
            <View style={styles.modalOverlay}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Select Check-In Date</Text>

                <View style={styles.wheelsRow}>
                  <Picker
                    selectedValue={tempCheckInMonth}
                    style={styles.wheel}
                    onValueChange={(value) => {
                      setTempCheckInMonth(value);
                      const maxDay = daysInMonth(tempCheckInYear, value);
                      if (tempCheckInDay > maxDay) {
                        setTempCheckInDay(maxDay);
                      }
                    }}
                  >
                    {months.map((m, index) => (
                      <Picker.Item key={m} label={m} value={index} />
                    ))}
                  </Picker>

                  <Picker
                    selectedValue={tempCheckInDay}
                    style={styles.wheel}
                    onValueChange={(value) => setTempCheckInDay(value)}
                  >
                    {checkInDays.map((d) => (
                      <Picker.Item key={d} label={d.toString()} value={d} />
                    ))}
                  </Picker>

                  <Picker
                    selectedValue={tempCheckInYear}
                    style={styles.wheel}
                    onValueChange={(value) => {
                      setTempCheckInYear(value);
                      const maxDay = daysInMonth(value, tempCheckInMonth);
                      if (tempCheckInDay > maxDay) {
                        setTempCheckInDay(maxDay);
                      }
                    }}
                  >
                    {years.map((y) => (
                      <Picker.Item key={y} label={y.toString()} value={y} />
                    ))}
                  </Picker>
                </View>

                <Pressable style={styles.modalButton} onPress={confirmCheckIn}>
                  <Text style={styles.modalButtonText}>Confirm</Text>
                </Pressable>

                <Pressable
                  style={[styles.modalButton, { backgroundColor: "#ccc" }]}
                  onPress={() => setShowCheckInPicker(false)}
                >
                  <Text style={styles.modalButtonText}>Cancel</Text>
                </Pressable>
              </View>
            </View>
          </Modal>

          <Modal visible={showCheckOutPicker} transparent animationType="fade">
            <View style={styles.modalOverlay}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Select Check-Out Date</Text>

                <View style={styles.wheelsRow}>
                  <Picker
                    selectedValue={tempCheckOutMonth}
                    style={styles.wheel}
                    onValueChange={(value) => {
                      setTempCheckOutMonth(value);
                      const maxDay = daysInMonth(tempCheckOutYear, value);
                      if (tempCheckOutDay > maxDay) {
                        setTempCheckOutDay(maxDay);
                      }
                    }}
                  >
                    {months.map((m, index) => (
                      <Picker.Item key={m} label={m} value={index} />
                    ))}
                  </Picker>

                  <Picker
                    selectedValue={tempCheckOutDay}
                    style={styles.wheel}
                    onValueChange={(value) => setTempCheckOutDay(value)}
                  >
                    {checkOutDays.map((d) => (
                      <Picker.Item key={d} label={d.toString()} value={d} />
                    ))}
                  </Picker>

                  <Picker
                    selectedValue={tempCheckOutYear}
                    style={styles.wheel}
                    onValueChange={(value) => {
                      setTempCheckOutYear(value);
                      const maxDay = daysInMonth(value, tempCheckOutMonth);
                      if (tempCheckOutDay > maxDay) {
                        setTempCheckOutDay(maxDay);
                      }
                    }}
                  >
                    {years.map((y) => (
                      <Picker.Item key={y} label={y.toString()} value={y} />
                    ))}
                  </Picker>
                </View>

                <Pressable style={styles.modalButton} onPress={confirmCheckOut}>
                  <Text style={styles.modalButtonText}>Confirm</Text>
                </Pressable>

                <Pressable
                  style={[styles.modalButton, { backgroundColor: "#ccc" }]}
                  onPress={() => setShowCheckOutPicker(false)}
                >
                  <Text style={styles.modalButtonText}>Cancel</Text>
                </Pressable>
              </View>
            </View>
          </Modal>

          <Modal visible={showGuestPicker} transparent animationType="fade">
            <View style={styles.modalOverlay}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Select Guests</Text>

                <Picker
                  selectedValue={guests}
                  onValueChange={(value) => setGuests(value)}
                  style={styles.picker}
                >
                  {Array.from({ length: 15 }, (_, i) => i + 1).map((num) => (
                    <Picker.Item key={num} label={num.toString()} value={num} />
                  ))}
                </Picker>

                <Pressable
                  style={styles.modalButton}
                  onPress={() => setShowGuestPicker(false)}
                >
                  <Text style={styles.modalButtonText}>Confirm</Text>
                </Pressable>
              </View>
            </View>
          </Modal>

          <Modal visible={showCampsitePicker} transparent animationType="fade">
            <View style={styles.modalOverlay}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Select Campsites</Text>

                <Picker
                  selectedValue={campsites}
                  onValueChange={(value) => setCampsites(value)}
                  style={styles.picker}
                >
                  {Array.from({ length: 5 }, (_, i) => i + 1).map((num) => (
                    <Picker.Item key={num} label={num.toString()} value={num} />
                  ))}
                </Picker>

                <Pressable
                  style={styles.modalButton}
                  onPress={() => setShowCampsitePicker(false)}
                >
                  <Text style={styles.modalButtonText}>Confirm</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </ImageBackground>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 30,
  },
  section: {
    marginVertical: 10,
  },
  label: {
    color: colors.textLight,
    fontSize: 16,
    marginBottom: 4,
    fontFamily: "Mountain",
  },
  valueText: {
    color: "#ffffff",
    fontSize: 18,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  summaryContainer: {
    marginTop: 20,
    padding: 12,
    borderRadius: 8,
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  summaryText: {
    color: "#ffffff",
    fontSize: 14,
    lineHeight: 20,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "90%",
    borderRadius: 12,
    padding: 16,
    backgroundColor: "#2f1b0f",
    alignItems: "center",
  },
  modalTitle: {
    color: "#ffffff",
    fontSize: 18,
    marginBottom: 12,
    fontFamily: "Mountain",
  },
  modalButton: {
    marginTop: 16,
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 8,
    backgroundColor: colors.primary,
  },
  modalButtonText: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "600",
  },
  picker: {
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 8,
  },
  wheelsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  wheel: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});