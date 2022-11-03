import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import Input from './components/Input';

const STORAGE_KEY = 'ASYNC_STORAGE_EXAMPLE_KEY'; // Define a key to store our data

export default function App() {
  const [name, setName] = useState('World');


  const saveName = async (name) => { // Save name to AsyncStorage
    try { // Try to save the name
      await AsyncStorage.setItem(STORAGE_KEY, name); // Save the name
      setName(name); // Update the name in the state
    } catch (e) {
      alert('Failed to save the data to the storage');
    }
  };

  const loadName = async () => {
    try {
      const user = await AsyncStorage.getItem(STORAGE_KEY); // Get the name from AsyncStorage

      if (user === null) return;

      setName(user); // Update the name in the state

    } catch (e) {
      alert('Failed to fetch the data from storage');
    }
  };

  useEffect(() => {
    loadName();
  }, []);


  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter your name"
        onSubmitEditing={(value) =>
          saveName(value)} />
      <Text style={styles.text}>Hello {name}!</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    padding: 15,
    backgroundColor: '#EEB'
  }
});
