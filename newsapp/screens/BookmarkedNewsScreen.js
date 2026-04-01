// this is a placeholder screen for bookmarked news //
// it will be populated next week according to the assignment //

import { View, Text, StyleSheet } from 'react-native';

function BookmarkedNewsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bookmarked News (to be implemented next week)</Text>
    </View>
  );
}

export default BookmarkedNewsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
});