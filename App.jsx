import React from 'react';
import {
         SafeAreaView,  
        } 
        from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import Home from './screens/home';
import Todo from './screens/todo';
import Tests from './screens/tests';
import CountDowns from './screens/cDown';

const App = () => {
  return (
  <NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name='home' component={Home} />
    <Stack.Screen name='todo' component={Todo} />
    <Stack.Screen name='countDown' component={CountDowns} />
    <Stack.Screen name ='tests' component={Tests} />

  </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App
