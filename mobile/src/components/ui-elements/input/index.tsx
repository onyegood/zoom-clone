import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
} from 'react-native'

import React from 'react'

interface Props {
  placeholder: string | undefined
  value: string
  title?: string
  onChangeText: ((text: string) => void) | undefined
  style?: StyleProp<TextStyle>
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
  style,
  title,
}) => {
  return (
    <View>
      {title && <Text style={_style.title}>{title}</Text>}
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        keyboardType={keyboardType}
        style={[_style.textInput, style, {marginBottom: title ? 20 : 10}]}
        placeholderTextColor='#cccccc6f'
      />
    </View>
  )
}

const _style = StyleSheet.create({
  textInput: {
    width: '100%',
    fontSize: 20,
    height: 50,
    borderWidth: 0.4,
    borderColor: '#ccc',
    padding: 10,
    color: '#ccc',
    marginTop: 10
  },
  title: {
    color: '#ccc',
  },
})
export default InputField
