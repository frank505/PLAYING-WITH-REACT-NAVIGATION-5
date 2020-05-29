import React from 'react'
import { Button, Text } from 'native-base';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FeedFirst from './FeedFirst'
import FeedSecond from './FeedSecond'

const Stack = createStackNavigator();


export default function Feeds() {


    return (
        <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="FeedFirst" component={FeedFirst} />
        <Stack.Screen name="FeedSecond" component={FeedSecond} />
      </Stack.Navigator>
    )
}
