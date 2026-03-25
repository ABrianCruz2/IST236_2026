import { FlatList } from 'react-native';
import StateGridTile from '../components/StateGridTile';
import { COUNTRIES } from '../data/dummy-data';

function HomeScreen({ navigation }) {
  function renderCountryItem(itemData) {
    function pressHandler() {
      navigation.navigate('VacationOverview', {
        countryId: itemData.item.id,
      });
    }

    return (
      <StateGridTile
        title={itemData.item.name}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={COUNTRIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCountryItem}
      numColumns={2}
    />
  );
}

export default HomeScreen;