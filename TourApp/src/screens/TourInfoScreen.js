import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AppContext } from '../context/AppContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../theme/colors';

export default function TourInfoScreen({ navigation }) {
  const { selectedTour, stopsByTour } = useContext(AppContext);
  const stops = stopsByTour[selectedTour.id];

  return (
    <LinearGradient
      colors={[colors.primary, colors.secondary]}
      style={styles.gradient}
    >
      <View style={styles.container}>
        <Text style={styles.title}>{selectedTour.name}</Text>

        {/* Book Tour Button */}
        <TouchableOpacity
          style={styles.bookButton}
          onPress={() => navigation.navigate('Booking')}
        >
          <Text style={styles.bookButtonText}>Book This Tour</Text>
        </TouchableOpacity>

        {/* Flyer Button */}
        <TouchableOpacity
          style={styles.flyerButton}
          onPress={() => navigation.navigate('Flyer')}
        >
          <Text style={styles.flyerButtonText}>View Flyer</Text>
        </TouchableOpacity>

        {/* Description Section */}
        <Text style={styles.sectionTitle}>About This Tour</Text>
        <Text style={styles.tourDescription}>{selectedTour.description}</Text>

        {/* Stops List */}
        <FlatList
          data={stops}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate('StopDetails', { stop: item })}
            >
              <Image source={{ uri: item.image }} style={styles.image} />

              <View style={styles.textContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </View>

              <MaterialCommunityIcons
                name="map-marker"
                size={26}
                color={colors.accent}
              />
            </TouchableOpacity>
          )}
        />
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
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 26,
    marginBottom: 20,
    textAlign: 'center',
    color: '#FFFFFF',
  },

  /* Book Button */
  bookButton: {
    backgroundColor: colors.accent,
    paddingVertical: 12,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  bookButtonText: {
    fontFamily: 'Poppins-Bold',
    color: '#FFFFFF',
    fontSize: 16,
  },

  /* Flyer Button */
  flyerButton: {
    backgroundColor: colors.primaryDark,
    paddingVertical: 12,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  flyerButtonText: {
    fontFamily: 'Poppins-Bold',
    color: '#FFFFFF',
    fontSize: 16,
  },

  /* Description Section */
  sectionTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: '#FFFFFF',
    marginBottom: 6,
  },
  tourDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 20,
  },

  /* Stop Cards */
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
});