/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homescreen from './Homescreen';
import AboutUsScreen from './AboutUsScreen';
import ContactDetailsScreen from './ContactDetailsScreen';

// import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

const App = () => {
  return (
    // <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Homescreen} />
          <Stack.Screen name="AboutUs" component={AboutUsScreen} />
          <Stack.Screen name="ContactDetailsScreen" component={ContactDetailsScreen} />

         
        </Stack.Navigator>
      </NavigationContainer>
    // </GestureHandlerRootView>
  );
};

export default App;
