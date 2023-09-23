import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, TouchableOpacity, Dimensions } from 'react-native';
// import * as Permissions from 'react-native-permissions';
// import { RNCamera } from 'react-native-camera';

export default function Process({ navigation }) {
  const [isImageMode, setImageMode] = useState(false);
  const [isVideoMode, setVideoMode] = useState(false);
  const [isLiveCameraMode, setLiveCameraMode] = useState(false);
//   const cameraRef = useRef(null);
//   const requestCameraPermission = async () => {
//     try {
//       const permissionStatus = await Permissions.request('camera');
//       if (permissionStatus === 'granted') {
//         // Camera permission granted, proceed with camera-related functionality
//         turnOnCamera();
//       } else {
//         // Camera permission denied
//         Alert.alert('Camera Permission Denied', 'You need to grant camera permission to use this functionality.');
//       }
//     } catch (error) {
//       console.log('Error requesting camera permission:', error);
//     }
//   };

//   const turnOnCamera = () => {
//     if (cameraRef.current) {
//       cameraRef.current.resumePreview();
//     }
//   };

  const resetModes = () => {
    setImageMode(false);
    setVideoMode(false);
    setLiveCameraMode(false);
  };

  const handleModeChange = (mode) => {
    resetModes();
    if (mode === 'image') setImageMode(true);
    else if (mode === 'video') setVideoMode(true);
    else if (mode === 'liveCamera') setLiveCameraMode(true);
  };

//   const screenHeight = Dimensions.get('window').height;
//   const containerHeight = screenHeight * 0.8;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ height: 16 }} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 }}>
        <SwitchButton
          title="Image Mode"
          onPress={() => handleModeChange('image')}
          selected={isImageMode}
        />
        <SwitchButton
          title="Video Mode"
          onPress={() => handleModeChange('video')}
          selected={isVideoMode}
        />
        <SwitchButton
          title="Live Camera Mode"
          onPress={() => handleModeChange('liveCamera')}
          selected={isLiveCameraMode}
        />
      </View>

      <View style={{ flex: 1, width: '100%', backgroundColor: 'lightgray'}}>
        {isImageMode && (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Image Processing Content</Text>
          </View>
        )}

        {isVideoMode && (
          <View style={{height: 500}}>
            <View style={styles.videoContainer}>
                 <Text>Output Video Display</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <TextInput placeholder="Upload Video" />
              <Button title="Upload" onPress={() => {}} />
            </View>
          </View>
        )}

        {isLiveCameraMode && (
          <View style={{height: 500}}>
            <View style={styles.videoContainer}>
            <Text>Live Webcam Video Display</Text>
            </View>
            <Button title="Turn on Camera" />
          </View>
        )}
      </View>
    </View>
  );
}

function SwitchButton({ title, onPress, selected }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        backgroundColor: selected ? 'blue' : 'transparent',
      }}
    >
      <Text style={{ color: selected ? 'white' : 'black', fontWeight: 'bold' }}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  loginButton: {
    backgroundColor: '#318bfb',
    borderRadius: 5,
    paddingVertical: 12,
  },
  videoContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 10,
    height: '80%',
  },
});