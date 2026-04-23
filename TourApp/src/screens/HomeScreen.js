import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button, Image } from 'react-native';
import colors from '../theme/colors';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      {/* Hero Section */}
      <Text style={styles.welcome}>WELCOME TO</Text>

      <Image 
        source={require('../../assets/images/dos2go.webp')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.tours}>TOURS</Text>

      {/* BIG Our Tours Button */}
      <TouchableOpacity
        style={styles.bigButton}
        onPress={() => navigation.navigate('TourOptions')}
      >
        <Text style={styles.bigButtonText}>Our Tours</Text>
      </TouchableOpacity>

      {/* My Bookings Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('MyBookings')}
      >
        <Text style={styles.buttonText}>My Bookings</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    padding: 20,
  },

  welcome: {
    fontFamily: 'Poppins-Bold',
    fontSize: 32,
    color: colors.text,
    marginBottom: 10,
    textAlign: 'center',
  },

  logo: {
    width: 250,
    height: 250,
    marginBottom: 10,
  },

  tours: {
    fontFamily: 'Poppins-Bold',
    fontSize: 32,
    color: colors.text,
    marginBottom: 40,
    textAlign: 'center',
  },

  bigButton: {
    backgroundColor: colors.accent,
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 12,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
  },

  bigButtonText: {
    fontFamily: 'Poppins-Bold',
    color: '#FFFFFF',
    fontSize: 20,
  },

  button: {
    backgroundColor: colors.primaryDark,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
    width: '60%',
    alignItems: 'center',
  },

  buttonText: {
    fontFamily: 'Poppins-Bold',
    color: '#FFFFFF',
    fontSize: 16,
  },
});