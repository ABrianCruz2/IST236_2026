import { View, StyleSheet } from 'react-native';
import NewsList from '../components/NewsList';

// this screen displays only tech news items //
// it passes the "tech" category into the NewsList component //

function TechNewsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <NewsList category="tech" navigation={navigation} />
    </View>
  );
}

export default TechNewsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});