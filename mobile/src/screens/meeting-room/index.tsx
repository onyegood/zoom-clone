import {SafeAreaView, Text, View} from 'react-native'

// import MainLayout from '../../layout'
import React from 'react'

interface Props {}

const MeetingRoomScreen: React.FC<Props> = () => {
  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <View >
      <Text style={{color: 'red'}}>Meeting room</Text>
    </View>
    </SafeAreaView>
  )
}

export default MeetingRoomScreen
