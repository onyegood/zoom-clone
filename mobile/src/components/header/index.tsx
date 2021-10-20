import {StyleSheet, Text, View} from 'react-native'

import React from 'react'

interface Props {}

const HeaderComponent: React.FC<Props> = () => {
  return (
    <View>
      <Text>App Header</Text>
    </View>
  )
}

const _styles = StyleSheet.create({

});

export default HeaderComponent
