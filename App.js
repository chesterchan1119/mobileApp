import { StatusBar } from 'expo-status-bar';
import { Button, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Navbar from './navigation/screens/Navbar';
import MainContainer from './navigation/MainContainer';
import Registration from './navigation/screens/Registration';
import Process from './navigation/screens/Process1';
import Setting from './navigation/screens/Setting';
// import { Ionicons } from '@expo/vector-icons';
// import { useFonts } from 'expo-font';

const backendUrl = 'http://127.0.0.1:5000'// Update this with your backend URL



export default function App() {
  // const [loaded] = useFonts({
  //   Ionicons: require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Ionicons.ttf'),
  // });
  
  // if (!loaded) {
  //   return null;
  // }
  return (
    <MainContainer/>
    // <View style={styles.container}>
    //   <Registration />
    //   {/* Navbar placed at the bottom */}
    //  <Navbar />
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  loginButton: {
    backgroundColor: '#318bfb',
    borderRadius: 5,
    paddingVertical: 12,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
 



   




