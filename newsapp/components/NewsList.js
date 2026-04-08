import { View, FlatList, StyleSheet } from 'react-native';
import NewsListItem from './NewsListItem';
import { NEWS_ITEMS } from '../data/dummy-data';

// this component can either:
// - receive a category and filter dummy data
// - or receive a direct items array (used for bookmarks) //
// each item navigates to the detail screen when pressed //

function NewsList({ category, items, navigation }) {
  // decide which items to render //
  let dataToRender = items;

  // if no items prop is provided, fall back to filtering by category //
  if (!dataToRender) {
    dataToRender = NEWS_ITEMS.filter((item) => item.category === category);
  }

  // handler for navigating to detail screen //
  function selectItemHandler(id) {
    navigation.navigate('NewsDetail', {
      newsId: id, // pass id to detail screen //
    });
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={dataToRender}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NewsListItem
            item={item}
            onPress={() => selectItemHandler(item.id)}
          />
        )}
      />
    </View>
  );
}

export default NewsList;

const styles = StyleSheet.create({
  container: {
    // wrapper for the list //
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
});