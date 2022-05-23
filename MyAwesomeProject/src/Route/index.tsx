import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import { HomeScreenName } from './FileNames';

const Stack = createNativeStackNavigator();

export const GetHomeStack=()=>{
    return (
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={HomeScreenName} component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}