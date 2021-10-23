import HomeScreen from '../screens/home/HomeScreen'
import MeetingRoomScreen from '../screens/meeting-room'
import {NavigationContainer} from '@react-navigation/native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {routeKeys} from './routeKeys'

const Navigation = () => {
  const Stack = createStackNavigator()
  const screenOptions = {
    headerShown: false,
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={routeKeys.home}
        screenOptions={screenOptions}>
        <Stack.Screen name={routeKeys.home} component={HomeScreen} />
        <Stack.Screen
          name={routeKeys.meetingRoom}
          component={MeetingRoomScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
