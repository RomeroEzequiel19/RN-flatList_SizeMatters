import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

const ContadorScreen = () => {
  const [count, setCount] = useState(0);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (load) {
      Alert.alert('Contador', `${count}`, [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
    } else {
      setLoad(true);
    }
  }, [count]);

  return (
    <View style={styles.container}>
      <Button title='+' onPress={() => setCount(count + 1)} />
      <Text style={styles.countText}>{count}</Text>
      <Button title='-' onPress={() => setCount(count - 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#f0f4f7',
  },
  countText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default ContadorScreen;
