import {SafeAreaView, Text, View} from 'react-native'

import InputField from '../../components/ui-elements/InputField'
// import MainLayout from '../../layout'
import React from 'react'

interface Props {}

const MeetingRoomScreen: React.FC<Props> = () => {
  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View>
        <InputField
          value=''
          placeholder='Enter name'
          onChangeText={() => true}
        />
        <InputField
          value=''
          placeholder='Enter room id'
          onChangeText={() => true}
        />
      </View>
    </SafeAreaView>
  )
}

export default MeetingRoomScreen
