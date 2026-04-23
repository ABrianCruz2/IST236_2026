import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AppContext } from '../context/AppContext';
import colors from '../theme/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TourOptionsScreen({ navigation }) {
  const { tours, setSelectedTour } = useContext(AppContext);

  return (
    <LinearGradient
      colors={[colors.primary, colors.secondary]}
      style={styles.gradient}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Choose a Tour</Text>

        {tours.map((tour) => (
          <TouchableOpacity
            key={tour.id}
            style={styles.card}
            onPress={() => {
              setSelectedTour(tour);
              navigation.navigate('TourInfo');
            }}
          >
            <Image source={{ uri: tour.image }} style={styles.image} />

            <View style={styles.textContainer}>
              <Text style={styles.name}>{tour.name}</Text>
              <Text style={styles.description}>Tap to view stops</Text>
            </View>

            <TouchableOpacity
              style={styles.bookButton}
              onPress={() => {
                setSelectedTour(tour);
                navigation.navigate('Booking');
              }}
            >
              <Text style={styles.bookButtonText}>Book</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
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
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 26,
    marginBottom: 20,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: colors.card,
    padding: 14,
    borderRadius: 12,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 14,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: colors.text,
  },
  description: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: colors.textLight,
  },
  bookButton: {
    backgroundColor: colors.accent,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginLeft: 10,
  },
  bookButtonText: {
    fontFamily: 'Poppins-Bold',
    color: '#FFFFFF',
    fontSize: 14,
  },
});
