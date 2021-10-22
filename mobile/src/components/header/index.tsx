import {StyleSheet, Text, View} from 'react-native'

import Entypo from '../icons/Entypo'
import React from 'react'

interface Props {}

const HeaderComponent: React.FC<Props> = () => {
  return (
    <View style={_styles.container}>
      <Entypo name='notification' size={30} color='#efefef' onPress={() => {}} />
      <Text style={_styles.heading}>Meet and chat</Text>
      <Entypo name='new-message' size={30} color='#efefef' onPress={() => {}} />
    </View>
  )
}

const _styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  heading: {
    color: '#efefef',
    fontSize: 20,
    fontWeight: '700'
  }
});

export default HeaderComponent
