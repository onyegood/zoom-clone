import {StyleSheet, Text, View} from 'react-native'

import MaterialCummunitIcons from '../../icons/MaterialCummunitIcons'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface Props {}

const CustomButton: React.FC<Props> = () => {
  return (
    <TouchableOpacity style={_style.buttonContainer}>
      <Text style={_style.text}>Start Meeting</Text>
      <MaterialCummunitIcons name='arrow-right' size={20} style={_style.text} />
    </TouchableOpacity>
  )
}

const _style = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '400'
  },
  buttonContainer: {
    backgroundColor: '#0470DC',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginBottom: 20,
    flexDirection: 'row'
  }
})
export default CustomButton
