import { Modal, View, Text, Image, Pressable, StyleSheet } from 'react-native';
import Colors from '../constants/colors';

function ImageViewModal({ visible, destination, onClose }) {
  if (!destination) {
    return null;
  }

  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Image source={{ uri: destination.imageUrl }} style={styles.image} />

          <Text style={styles.title}>{destination.name}</Text>

          <Text style={styles.description}>{destination.description}</Text>

          <Pressable
            style={({ pressed }) => [
              styles.closeButton,
              pressed && styles.pressed,
            ]}
            onPress={onClose}
          >
            <Text style={styles.closeText}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

export default ImageViewModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(167, 216, 255, 0.35)', // lightBlue tint
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContainer: {
    width: '100%',
    backgroundColor: Colors.white,
    borderRadius: 14,
    padding: 16,
    alignItems: 'center',
    elevation: 6,
    shadowColor: Colors.black,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 10,
    marginBottom: 14,
  },
  title: {
    fontFamily: 'montserrat-bold',
    fontSize: 22,
    marginBottom: 8,
    textAlign: 'center',
    color: Colors.brickRed,
  },
  description: {
    fontFamily: 'montserrat-regular',
    fontSize: 16,
    color: Colors.gray600,
    textAlign: 'center',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: Colors.darkBlue,
    paddingVertical: 10,
    paddingHorizontal: 26,
    borderRadius: 8,
  },
  closeText: {
    color: Colors.white,
    fontFamily: 'montserrat-bold',
    fontSize: 16,
  },
  pressed: {
    opacity: 0.7,
  },
});