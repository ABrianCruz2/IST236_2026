import React, { useContext } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { AppContext } from '../context/AppContext';
import colors from '../theme/colors';

export default function FlyerScreen() {
  const { selectedTour } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{selectedTour.name} Flyer</Text>

      <Image 
        source={{ uri: selectedTour.flyer }}
        style={styles.flyer}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    marginBottom: 20,
    color: colors.text,
  },
  flyer: {
    width: '100%',
    height: 500,
    borderRadius: 12,
  },
});