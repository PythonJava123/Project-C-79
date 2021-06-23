
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/homeScreen';
import DailyPic from './screens/dailyPic';
import SpaceCraft from './screens/spaceCraft';
import StarMap from './screens/starMap'
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName='home' screenOptions={{headerShown: false}}>

        <Stack.Screen name='home' component={HomeScreen}></Stack.Screen>
        <Stack.Screen name='pic' component={DailyPic}></Stack.Screen>
        <Stack.Screen name='spaceship' component={SpaceCraft}></Stack.Screen>
        <Stack.Screen name='map' component={StarMap}></Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
