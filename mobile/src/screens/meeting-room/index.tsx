import React, { useState } from 'react'
import {StyleSheet, View} from 'react-native'

import StartMeetingForm from './forms/StartMeetingForm'

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
      <StartMeetingForm
        name={name}
        setName={setName}
        roomId={roomId}
        setRoomId={setRoomId}
        handleSubmit={handleSubmit}
      />
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
