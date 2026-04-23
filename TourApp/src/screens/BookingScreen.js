import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { AppContext } from '../context/AppContext';
import { ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../theme/colors';

export default function BookingScreen({ navigation }) {
  const { 
    bookingData, 
    setBookingData, 
    selectedTour, 
    availableDates,
    bookings,
    setBookings 
  } = useContext(AppContext);
  const [localData, setLocalData] = useState(bookingData);

  const handleSubmit = async () => {
  const requiredFields = [
      'firstName',
      'lastName',
      'address1',
      'city',
      'state',
      'zip',
      'email',
      'phone',
      'date',
    ];

    for (let field of requiredFields) {
      if (!localData[field]) {
        Alert.alert('Missing Information', 'Please fill out all required fields.');
        return;
      }
    }

    // Build the booking object
    const newBooking = {
      id: Date.now(),
      tour: selectedTour.name,
      ...localData,
    };
    setBookingData(localData);

    // Save to context
    setBookings((prev) => [...prev, newBooking]);

    // Save to AsyncStorage
    try {
      const existing = await AsyncStorage.getItem('bookings');
      const parsed = existing ? JSON.parse(existing) : [];
      parsed.push(newBooking);
      await AsyncStorage.setItem('bookings', JSON.stringify(parsed));
    } catch (err) {
      console.log('Error saving booking:', err);
    }

    // Navigate to confirmation
    navigation.navigate('BookingConfirmation');
  };

  return (
    <ScrollView 
      style={styles.scroll}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
    <View style={styles.container}>
      <Text style={styles.title}>Book Your Tour</Text>

      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={localData.firstName}
        onChangeText={(text) => setLocalData({ ...localData, firstName: text })}
      />

      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={localData.lastName}
        onChangeText={(text) => setLocalData({ ...localData, lastName: text })}
      />

      <TextInput
        style={styles.input}
        placeholder="Address Line 1"
        value={localData.address1}
        onChangeText={(text) => setLocalData({ ...localData, address1: text })}
      />

      <TextInput
        style={styles.input}
        placeholder="Address Line 2 (optional)"
        value={localData.address2}
        onChangeText={(text) => setLocalData({ ...localData, address2: text })}
      />

      <TextInput
        style={styles.input}
        placeholder="City"
        value={localData.city}
        onChangeText={(text) => setLocalData({ ...localData, city: text })}
      />

      <TextInput
        style={styles.input}
        placeholder="State"
        value={localData.state}
        onChangeText={(text) => setLocalData({ ...localData, state: text })}
      />

      <TextInput
        style={styles.input}
        placeholder="ZIP Code"
        value={localData.zip}
        onChangeText={(text) => setLocalData({ ...localData, zip: text })}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={localData.email}
        onChangeText={(text) => setLocalData({ ...localData, email: text })}
      />

      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={localData.phone}
        onChangeText={(text) => setLocalData({ ...localData, phone: text })}
      />

      <Text style={styles.label}>Select a Date:</Text>

      <Picker
        selectedValue={localData.date}
        onValueChange={(value) => setLocalData({ ...localData, date: value })}
        style={styles.picker}
      >
        <Picker.Item label="Choose a date..." value="" />
        {availableDates.map((d, index) => (
          <Picker.Item key={index} label={d} value={d} />
        ))}
      </Picker>

      <Button title="Submit Booking" onPress={handleSubmit} color={colors.accent} />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 26,
    marginBottom: 20,
    color: colors.text,
  },
  input: {
    backgroundColor: '#FFFFFF',
    padding: 14,
    borderRadius: 10,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: colors.border,
    fontFamily: 'Poppins-Regular',
  },
  label: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    marginBottom: 6,
    color: colors.text,
  },
  picker: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 20,
  },
  scroll: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    padding: 20,
    paddingBottom: 40, // ensures button isn't cut off
  },
});