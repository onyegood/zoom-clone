import HomeScreen from '../screens/home/HomeScreen'
import MeetingRoomScreen from '../screens/meeting-room'
import {NavigationContainer} from '@react-navigation/native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {routeKeys} from './routeKeys'

const Navigation = () => {
  const Stack = createStackNavigator()
  const screenOptions = {
    headerShown: true,
    gestureDirection: 'vertical'
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={routeKeys.home}
        screenOptions={{
          gestureDirection: 'vertical'
        }}>
        <Stack.Screen
          name={routeKeys.home}
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={routeKeys.meetingRoom}
          component={MeetingRoomScreen}
          options={{
            title: 'Start a Meeting',
            headerStyle: {
              backgroundColor: '#1c1c1c'
            },
            headerTintColor: 'white'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
