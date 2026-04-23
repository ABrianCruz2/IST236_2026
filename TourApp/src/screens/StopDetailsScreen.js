import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../theme/colors';

export default function StopDetailsScreen({ route, navigation }) {
  const { stop } = route.params;

  return (
    <LinearGradient
      colors={[colors.primary, colors.secondary]}
      style={styles.gradient}
    >
      <ScrollView contentContainerStyle={styles.container}>
        
        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="arrow-left" size={28} color="#FFFFFF" />
        </TouchableOpacity>

        {/* Hero Image */}
        <Image source={{ uri: stop.image }} style={styles.heroImage} />

        <Text style={styles.title}>{stop.name}</Text>
        <Text style={styles.description}>{stop.description}</Text>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 8,
    borderRadius: 30,
  },
  heroImage: {
    width: '100%',
    height: 240,
    borderRadius: 16,
    marginBottom: 20,
    marginTop: 60,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 28,
    marginBottom: 10,
    color: '#FFFFFF',
  },
  description: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#F0F0F0',
    lineHeight: 22,
  },
});