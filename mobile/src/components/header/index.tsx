import {Text, View} from 'react-native'

import React from 'react'

interface Props {}

const HeaderComponent: React.FC<Props> = () => {
  return (
    <View>
      <Text>App Header</Text>
    </View>
  )
}

export default HeaderComponent
