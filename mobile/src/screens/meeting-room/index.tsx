import {Text, View} from 'react-native'

import MainLayout from '../../layout'
import React from 'react'

interface Props {}

const MeetingRoom: React.FC<Props> = () => {
  return (
    <MainLayout>
      <View>
        <Text>Meeting room</Text>
      </View>
    </MainLayout>
  )
}

export default MeetingRoom
