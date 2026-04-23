import React, { useContext, useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import { AppContext } from '../context/AppContext';
import colors from '../theme/colors';

export default function MyBookingsScreen() {
  const { bookings, setBookings } = useContext(AppContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBookings = async () => {
      try {
        const stored = await AsyncStorage.getItem('bookings');
        if (stored) {
          setBookings(JSON.parse(stored));
        }
      } catch (err) {
        console.log('Error loading bookings:', err);
      }
      setLoading(false);
    };

    loadBookings();
  }, []);

  if (loading) {
    return (
      <LinearGradient colors={[colors.primary, colors.secondary]} style={styles.gradient}>
        <View style={styles.center}>
          <Text style={styles.loading}>Loading bookings...</Text>
        </View>
      </LinearGradient>
    );
  }

  return (
    <LinearGradient colors={[colors.primary, colors.secondary]} style={styles.gradient}>
      <View style={styles.container}>
        <Text style={styles.title}>My Bookings</Text>

        {bookings.length === 0 ? (
          <Text style={styles.noBookings}>No bookings yet.</Text>
        ) : (
          <FlatList
            data={bookings}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Text style={styles.tour}>{item.tour}</Text>
                <Text style={styles.date}>Date: {item.date}</Text>
                <Text style={styles.name}>
                  {item.firstName} {item.lastName}
                </Text>
              </View>
            )}
          />
        )}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: { flex: 1 },
  container: { flex: 1, padding: 20 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  loading: { fontFamily: 'Poppins-Regular', color: '#FFF', fontSize: 18 },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 28,
    color: '#FFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  noBookings: {
    fontFamily: 'Poppins-Regular',
    color: '#FFF',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 40,
  },
  card: {
    backgroundColor: colors.card,
    padding: 16,
    borderRadius: 12,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: colors.border,
  },
  tour: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: colors.text,
  },
  date: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: colors.textLight,
  },
  name: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: colors.textLight,
  },
});