import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import Registration from './screens/Registration';
import Process from './screens/Process';
import Setting from './screens/Setting';

//Screen names
const registrationName = "Registration";
const processName = "Process";
const settingName = "Setting";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={registrationName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;


            // Icon names -> don't adjust here
            if (rn === registrationName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === processName) {
              iconName = focused ? 'list' : 'list-outline';

            } else if (rn === settingName) {
              iconName = focused ? 'settings' : 'settings-outline'; 
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={registrationName} component={Registration} />
        <Tab.Screen name={processName} component={Process} />
        <Tab.Screen name={settingName} component={Setting} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;