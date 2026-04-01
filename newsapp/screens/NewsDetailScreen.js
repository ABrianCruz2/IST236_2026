import { useLayoutEffect } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { NEWS_ITEMS } from '../data/dummy-data';

// this screen displays the full details of a selected news item //
// it receives the newsId from navigation params //
// it also sets a placeholder bookmark button in the header //

function NewsDetailScreen({ route, navigation }) {
  const { newsId } = route.params;

  // find the selected news item //
  const selectedNews = NEWS_ITEMS.find((item) => item.id === newsId);

  // set up header bookmark button //
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Text style={styles.bookmarkPlaceholder}>
          ★
        </Text>
      ),
    });
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: selectedNews.imageUrl }} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.headline}>{selectedNews.headline}</Text>
        <Text style={styles.meta}>
          {selectedNews.date} • {selectedNews.author} • {selectedNews.agency}
        </Text>

        <Text style={styles.description}>{selectedNews.description}</Text>
      </View>
    </ScrollView>
  );
}

export default NewsDetailScreen;

const styles = StyleSheet.create({
  container: {
    // wrapper for scrollable content //
    flex: 1,
    backgroundColor: '#ffffff',
  },

  image: {
    // large header image //
    width: '100%',
    height: 240,
  },

  content: {
    // padding for text content //
    padding: 16,
  },

  headline: {
    // main headline text //
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 8,
  },

  meta: {
    // date, author, agency //
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },

  description: {
    // full article description //
    fontSize: 16,
    lineHeight: 22,
  },

  bookmarkPlaceholder: {
    // temporary bookmark icon //
    fontSize: 22,
    marginRight: 12,
  },
});