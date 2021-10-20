import {StyleSheet, Text, View} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5'
import React from 'react'

interface Props {}

const HeaderComponent: React.FC<Props> = () => {
  return (
    <View>
      <Text>App Header</Text>
      <Icon name="apple-alt" size={30} color="#900" />
    </View>
  )
}

const _styles = StyleSheet.create({

});

export default HeaderComponent
