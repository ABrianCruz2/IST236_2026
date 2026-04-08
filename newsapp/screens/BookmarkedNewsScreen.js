import { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { BookmarksContext } from '../store/context/bookmarks-context';
import { NEWS_ITEMS } from '../data/dummy-data';
import NewsList from '../components/NewsList';

// this screen displays all bookmarked news items //
// it shows a message if no items have been bookmarked //

function BookmarkedNewsScreen({ navigation }) {
  const bookmarksCtx = useContext(BookmarksContext);

  const bookmarkedNews = NEWS_ITEMS.filter((item) =>
    bookmarksCtx.ids.includes(item.id)
  );

  if (bookmarkedNews.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>no bookmarked news yet</Text>
      </View>
    );
  }

  // use the items prop instead of category //
  return <NewsList items={bookmarkedNews} navigation={navigation} />;
}

export default BookmarkedNewsScreen;

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  emptyText: {
    fontSize: 16,
    color: '#444',
  },
});