import React, { useEffect } from 'react'

import CustomButton from '../../../components/ui-elements/button'
import InputField from '../../../components/ui-elements/input'
import {View} from 'react-native'

interface Props {
  name: string
  roomId: string
  setName: (text: string) => void
  setRoomId: (text: string) => void
  handleSubmit: () => void
}

const StartMeetingForm: React.FC<Props> = ({
  name,
  roomId,
  setName,
  setRoomId,
  handleSubmit,
}) => {

  useEffect(() => {
    console.log('hhhhhbchc sjjjs');
    return () => {
      
    };
  }, [])

  return (
    <>
      <View>
        <InputField
          value={name}
          placeholder='Enter name'
          onChangeText={value => setName(value)}
          title='Name*'
        />
        <InputField
          value={roomId}
          placeholder='Enter room id'
          onChangeText={value => setRoomId(value)}
          title='Room*'
        />
      </View>

      <CustomButton onPress={() => handleSubmit()} />
    </>
  )
}

export default StartMeetingForm
