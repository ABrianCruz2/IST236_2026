import { View, StyleSheet } from 'react-native';
import NewsList from '../components/NewsList';

// this screen displays only us news items //
// it simply renders the NewsList component with the correct category //

function USNewsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <NewsList category="us" navigation={navigation} />
    </View>
  );
}

export default USNewsScreen;

const styles = StyleSheet.create({
  container: {
    // wrapper for the screen //
    flex: 1,
  },
});