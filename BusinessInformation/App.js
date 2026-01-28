import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, Linking } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require("./assets/images/IMG_1462.jpg")}/>

        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.text}>Brian Cruz</Text>
          <Text style={styles.text} onPress={() => Linking.openURL("mailto:brianwcruz@gmail.com")}>brianwcruz@gmail.com</Text>
          <Text style={styles.text} onPress={() => Linking.openURL("tel:+18435032121")}>843-503-2121</Text>
          <Text style={styles.text} onPress={() => Linking.openURL("https://github.com/ABrianCruz2/IST236_2026")}>Github Link</Text>
          
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 3,
    paddingTop: 40,
    backgroundColor: "skyblue",
    width: "100%",

  },
  image: {
    height: 500,
    width: "100%",
    resizeMode: "cover",
    borderWidth: 20,
    borderColor: "black",
  },
  infoContainer: {
    flex: 2,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",

  },
  text: {
    fontSize: 30,
    marginBottom: 5,
  },
});
