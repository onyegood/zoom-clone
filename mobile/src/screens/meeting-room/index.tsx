import React, { useState } from 'react'
import {StyleSheet, View} from 'react-native'

import CustomButton from '../../components/ui-elements/button'
import InputField from '../../components/ui-elements/input'

interface Props {
}

const MeetingRoomScreen: React.FC<Props> = () => {

  const [name, setName] = useState('');
  const [roomId, setRoomId] = useState('');

  const handleSubmit = () => {
    const payload = {
      name: name,
      room: roomId
    }
    console.log(payload)
  }

  return (
    <View style={_style.container}>
      <View>
        <InputField
          value={name}
          placeholder='Enter name'
          onChangeText={(value) => setName(value)}
          title='Name*'
        />
        <InputField
          value={roomId}
          placeholder='Enter room id'
          onChangeText={(value) => setRoomId(value)}
          title='Room*'
        />
      </View>

      <CustomButton onPress={() => handleSubmit()} />
    </View>
  )
}

const _style = StyleSheet.create({
  container: {
    backgroundColor: '#1c1c1c',
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
  },
})
export default MeetingRoomScreen
