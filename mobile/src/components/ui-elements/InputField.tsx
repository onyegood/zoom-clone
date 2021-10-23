import {StyleSheet, TextInput, View} from 'react-native'

import React from 'react'

interface Props {
  placeholder: string | undefined
  value: string
  onChangeText: ((text: string) => void) | undefined
  keyboardType?:
    | 'default'
    | 'numeric'
    | 'email-address'
    | 'ascii-capable'
    | 'numbers-and-punctuation'
    | 'url'
    | 'number-pad'
    | 'phone-pad'
    | 'name-phone-pad'
    | 'decimal-pad'
    | 'twitter'
    | 'web-search'
    | 'visible-password'
}

const InputField: React.FC<Props> = ({
  placeholder,
  value,
  onChangeText,
  keyboardType,
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      keyboardType={keyboardType}
      style={_style.textInput}
      placeholderTextColor='#1c1c1c'
    />
  )
}

const _style = StyleSheet.create({
  textInput: {
    width: '100%',
    // backgroundColor: '#1c1c1c',
    fontSize: 20,
    height: 50,
    borderWidth: 1,
    padding: 10,
    color: '#1c1c1c',
  },
})
export default InputField
