import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View , Image} from 'react-native';

const backendUrl = 'http://127.0.0.1:5000'; // Update this with your backend URL

const Registration = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [registerMessage, setRegisterMessage] = useState('');
  const [showLoginForm, setShowLoginForm] = useState(false);

  const testConnection = () => {
    fetch(`${backendUrl}/testMessage`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        return response.json(); // Parse the response body as JSON
      })
      .then((data) => {
        console.log(data.message); // Log the backend response
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };

  const handleRegister = () => {
    // Perform login request to your backend with the entered username and password
    // Replace the fetch request with your actual login API endpoint and implementation
    console.log(username);
    console.log(password);
    const requestBody = { 
      username: username,
      password: password
    };
    fetch(`${backendUrl}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody)
    })
      .then((response) => { 
        console.log(response);
        return response.json(); // Parse the response body as JSON
      })
      .then((data) => {
        console.log(data.message);
        setRegisterMessage(data.message); // Log the backend response
        setModalVisible(true); // Show the modal on successful login
      })
      .catch((error) => {
        console.error('Error Registering in:', error.message);
        setRegisterMessage(error.message);
        setModalVisible(true); // Show the modal on error
      });
  };

  const handleSignIn = () => {
    // Perform sign-in request to your backend with the entered username and password
    // Replace the fetch request with your actual sign-in API endpoint and implementation
    
    // Example:
    // fetch(`${backendUrl}/signin`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(requestBody)
    // })
    //   .then((response) => { 
    //     console.log(response);
    //     return response.json(); // Parse the response body as JSON
    //   })
    //   .then((data) => {
    //     console.log(data.message);
    //   })
    //   .catch((error) => {
    //     console.error('Error Signing In:', error.message);
    //   });
  };

  const handleNavToLogin = () => {
    setShowLoginForm(true);
  };
  const handleNavToRegister = () => {
    setShowLoginForm(false);
  };
  
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/muscle.png')} style={styles.image} /> 
      <Text style={styles.logo}>{showLoginForm ? 'User Login' : 'User Register'}</Text>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.registerButton} onPress={showLoginForm ? handleSignIn : handleRegister}>
          <Text style={styles.buttonText}>{showLoginForm ? 'Sign In' : 'Register'}</Text>
        </TouchableOpacity>
        
        <View style={{ height: 16 }} /> 
        <TouchableOpacity style={styles.loginButton} onPress={testConnection}>
          <Text style={styles.buttonText}>Test</Text>
        </TouchableOpacity>
        <View style={{ height: 16 }} /> 
        {!showLoginForm && (
          <TouchableOpacity style={styles.linkButton} onPress={handleNavToLogin}>
            <Text style={styles.linkButtonText}> Login ></Text>
          </TouchableOpacity>
        )}
           {showLoginForm && (
          <TouchableOpacity style={styles.linkButton} onPress={handleNavToRegister}>
            <Text style={styles.linkButtonText}> Register ></Text>
          </TouchableOpacity>
        )}
      </View>

      <StatusBar style="auto" />

      {/* Alert Modal */}
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>{registerMessage}</Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => {
                setModalVisible(false);
                setRegisterMessage('');
              }}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', 
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
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
  linkButton: {
      borderRadius: 5,
      paddingVertical: 12,
      alignSelf: 'flex-end',
      width: 100,
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: '#318bfb',
  },
  linkButtonText: {
    color: '#318bfb',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  registerButton: {
    backgroundColor: '#90EE90',
    borderRadius: 5,
    paddingVertical: 12,
  },
  buttonText: {
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
    backgroundColor: '#fff', //white in background
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

export default Registration;