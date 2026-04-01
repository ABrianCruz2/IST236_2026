import { View, FlatList, StyleSheet } from 'react-native';
import NewsListItem from './NewsListItem';
import { NEWS_ITEMS } from '../data/dummy-data';

// this component receives a category (us, world, tech, etc) //
// it filters the dummy data and renders only matching items //
// each item navigates to the detail screen when pressed //

function NewsList({ category, navigation }) {
  // filter items by category //
  const filteredItems = NEWS_ITEMS.filter(
    (item) => item.category === category
  );

  // handler for navigating to detail screen //
  function selectItemHandler(id) {
    navigation.navigate('NewsDetail', {
      newsId: id, // pass id to detail screen //
    });
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredItems}
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