import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Bai1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.square}>
        <Text style={styles.text}>i'm text</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Bai1;
