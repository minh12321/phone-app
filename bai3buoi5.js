import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Bai3buoi5 = () => {
  const [backgroundColor, setBackgroundColor] = useState('green');

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.text}>{backgroundColor.toUpperCase()}</Text>

      <TouchableOpacity style={[styles.button, { backgroundColor: 'blue' }]} onPress={() => setBackgroundColor('blue')}>
        <Text style={styles.buttonText}>BLUE</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: 'brown' }]} onPress={() => setBackgroundColor('brown')}>
        <Text style={styles.buttonText}>BROWN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: 'yellow' }]} onPress={() => setBackgroundColor('yellow')}>
        <Text style={styles.buttonText}>YELLOW</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: 'red' }]} onPress={() => setBackgroundColor('red')}>
        <Text style={styles.buttonText}>RED</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: 'black' }]} onPress={() => setBackgroundColor('black')}>
        <Text style={[styles.buttonText, { color: 'white' }]}>BLACK</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  button: {
    width: 350,
    padding: 20,
    marginVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Bai3buoi5;
