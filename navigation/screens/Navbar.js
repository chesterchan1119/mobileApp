import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.navContainer}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'Registration' && styles.activeTabButton,
          ]}
          onPress={() => handleTabPress('Registration')}
        >
          <Text
            style={[
              styles.tabButtonText,
              activeTab === 'Registration' && styles.activeTabButtonText,
            ]}
          >
            Register
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'Processing' && styles.activeTabButton,
          ]}
          onPress={() => handleTabPress('Processing')}
        >
          <Text
            style={[
              styles.tabButtonText,
              activeTab === 'Processing' && styles.activeTabButtonText,
            ]}
          >
            Processing
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'Setting' && styles.activeTabButton,
          ]}
          onPress={() => handleTabPress('Setting')}
        >
          <Text
            style={[
              styles.tabButtonText,
              activeTab === 'Setting' && styles.activeTabButtonText,
            ]}
          >
            Setting
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 100, // Adjust the height as needed
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    backgroundColor: '#f5f5f5',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  activeTabButton: {
    borderBottomWidth: 2,
    borderBottomColor: '#318bfb',
  },
  tabButtonText: {
    fontSize: 16,
    color: '#333',
  },
  activeTabButtonText: {
    color: '#318bfb',
    fontWeight: 'bold',
  },
});

export default Navbar;