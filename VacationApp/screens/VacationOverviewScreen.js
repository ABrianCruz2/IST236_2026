import { useLayoutEffect, useState } from 'react';
import { View, Text, FlatList, Image, Pressable, StyleSheet } from 'react-native';

import { COUNTRIES, DESTINATIONS } from '../data/dummy-data';
import ImageViewModal from '../modal/ImageViewModal';
import Colors from '../constants/colors';

function VacationOverviewScreen({ route, navigation }) {
  const [selectedDestination, setSelectedDestination] = useState(null);

  const countryId = route.params.countryId;

  const displayedDestinations = DESTINATIONS.filter(
    (dest) => dest.countryId === countryId
  );

  const country = COUNTRIES.find((c) => c.id === countryId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: country ? country.name : 'Destinations',
    });
  }, [country, navigation]);

  function openModalHandler(destination) {
    setSelectedDestination(destination);
  }

  function closeModalHandler() {
    setSelectedDestination(null);
  }

  function renderDestinationItem({ item }) {
    return (
      <Pressable
        style={({ pressed }) => [
          styles.itemContainer,
          pressed && styles.pressed,
        ]}
        onPress={() => openModalHandler(item)}
      >
        <Image source={{ uri: item.imageUrl }} style={styles.image} />

        <View style={styles.infoContainer}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.detail}>Cost: ${item.cost}</Text>
          <Text style={styles.detail}>Founded: {item.yearFounded}</Text>
          <Text style={styles.detail}>Rating: {item.rating}</Text>
        </View>
      </Pressable>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedDestinations}
        keyExtractor={(item) => item.id}
        renderItem={renderDestinationItem}
      />

      {selectedDestination && (
        <ImageViewModal
          visible={!!selectedDestination}
          destination={selectedDestination}
          onClose={closeModalHandler}
        />
      )}
    </View>
  );
}

export default VacationOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: Colors.black,
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  pressed: {
    backgroundColor: Colors.lightBlue,
  },
  image: {
    width: 120,
    height: 120,
  },
  infoContainer: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'montserrat-bold',
    fontSize: 18,
    marginBottom: 4,
    color: Colors.brickRed,
  },
  detail: {
    fontFamily: 'montserrat-regular',
    fontSize: 14,
    color: Colors.gray600,
  },
});