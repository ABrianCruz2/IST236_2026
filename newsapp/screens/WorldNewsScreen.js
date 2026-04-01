import { View, StyleSheet } from 'react-native';
import NewsList from '../components/NewsList';

// this screen displays only world news items //
// it passes the "world" category into the NewsList component //

function WorldNewsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <NewsList category="world" navigation={navigation} />
    </View>
  );
}

export default WorldNewsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});