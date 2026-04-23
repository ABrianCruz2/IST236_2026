import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AppContext } from '../context/AppContext';
import colors from '../theme/colors';

export default function BookingConfirmationScreen({ navigation }) {
  const { bookingData, selectedTour } = useContext(AppContext);

  return (
    <LinearGradient
      colors={[colors.primary, colors.secondary]}
      style={styles.gradient}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Booking Confirmed!</Text>

        <View style={styles.card}>
          <Text style={styles.label}>Tour:</Text>
          <Text style={styles.value}>{selectedTour?.name}</Text>

          <Text style={styles.label}>Date:</Text>
          <Text style={styles.value}>{bookingData.date}</Text>

          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>
            {bookingData.firstName} {bookingData.lastName}
          </Text>

          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{bookingData.email}</Text>

          <Text style={styles.label}>Phone:</Text>
          <Text style={styles.value}>{bookingData.phone}</Text>

          <Text style={styles.label}>Address:</Text>
          <Text style={styles.value}>
            {bookingData.address1}
            {bookingData.address2 ? `, ${bookingData.address2}` : ''}
          </Text>

          <Text style={styles.value}>
            {bookingData.city}, {bookingData.state} {bookingData.zip}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>Return Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.secondaryButton]}
          onPress={() => navigation.navigate('TourOptions')}
        >
          <Text style={styles.buttonText}>View More Tours</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 30,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 30,
  },
  card: {
    backgroundColor: colors.card,
    padding: 20,
    borderRadius: 14,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: colors.border,
  },
  label: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: colors.text,
    marginTop: 10,
  },
  value: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: colors.textLight,
  },
  button: {
    backgroundColor: colors.accent,
    paddingVertical: 14,
    borderRadius: 10,
    marginBottom: 14,
    alignItems: 'center',
  },
  secondaryButton: {
    backgroundColor: colors.primaryDark,
  },
  buttonText: {
    fontFamily: 'Poppins-Bold',
    color: '#FFFFFF',
    fontSize: 16,
  },
});