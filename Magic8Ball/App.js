import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal, Image, ImageBackground } from 'react-native';

const responses = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"
];

export default function App() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const getAnswer = () => {
    if (question.trim() === '') {
      alert('Please ask a question.');
      return;
    }
    const randomIndex = Math.floor(Math.random() * responses.length);
    setAnswer(responses[randomIndex]);
    setModalVisible(true);
  };

  return (
    <ImageBackground
    source={require('./assets/images/magic8background.jpeg')}
    style={styles.container} >
      <Text style={styles.title}>Magic 8 Ball</Text>
      <TextInput
        style={styles.input}
        onChangeText={setQuestion}
        value={question}
        placeholder="Ask your question"
      />
      <TouchableOpacity style={styles.button} onPress={getAnswer}>
        <Text style={styles.buttonText}>Get Answer</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{question}</Text>
            <Text style={styles.modalText}>{answer}</Text>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Answer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <StatusBar style="auto" />
    
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#849fb0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 150,
    borderWidth: 5,
    borderColor: "yellow",
    backgroundColor: "black",
    color: "blue",

  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  input: {
    height: 50,
    margin: 50,
    backgroundColor: "#ffffff",
    borderWidth: 2,
    padding: 10,
    width: '80%',
  },
  button: {
    alignItems: "center",
    backgroundColor: "#0cb355",
    padding: 10,
    borderWidth: 3,
    borderBlockColor: "black",
    borderColor: "black",
  },
  buttonText: {
    fontSize: 30,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  }
});
