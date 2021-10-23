import {StyleSheet, View} from 'react-native'

import CustomButton from '../../components/ui-elements/button'
import InputField from '../../components/ui-elements/input'
import React from 'react'

interface Props {}

const MeetingRoomScreen: React.FC<Props> = () => {
  return (
    <View style={_style.container}>
      <View>
        <InputField
          value=''
          placeholder='Enter name'
          onChangeText={() => true}
          title='Name*'
        />
        <InputField
          value=''
          placeholder='Enter room id'
          onChangeText={() => true}
          title='Room*'
        />
      </View>

      <CustomButton />
    </View>
  )
}

const _style = StyleSheet.create({
  container: {
    backgroundColor: '#1f1f1f',
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
  },
})
export default MeetingRoomScreen
