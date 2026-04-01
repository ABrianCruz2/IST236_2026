import { Pressable, View, Text, Image, StyleSheet } from 'react-native';

// this component represents a single news row in the list //
// it displays the image, headline, and date //
// pressing it will navigate to the detail screen //

function NewsListItem({ item, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        pressed && styles.pressed, // adds subtle feedback //
      ]}
    >
      <Image source={{ uri: item.imageUrl }} style={styles.image} />

      <View style={styles.textContainer}>
        <Text style={styles.headline}>{item.headline}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
    </Pressable>
  );
}

export default NewsListItem;

const styles = StyleSheet.create({
  container: {
    // main row container //
    flexDirection: 'row',
    padding: 12,
    marginVertical: 6,
    marginHorizontal: 12,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    elevation: 3, // android shadow //
    shadowColor: '#000', // ios shadow //
    shadowOpacity: 0.15,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },

  pressed: {
    // subtle press feedback //
    opacity: 0.7,
  },

  image: {
    // thumbnail image //
    width: 90,
    height: 90,
    borderRadius: 8,
    marginRight: 12,
  },

  textContainer: {
    // holds headline + date //
    flex: 1,
    justifyContent: 'center',
  },

  headline: {
    // headline text //
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },

  date: {
    // date text //
    fontSize: 13,
    color: '#666',
  },
});