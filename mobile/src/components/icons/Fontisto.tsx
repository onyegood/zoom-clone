import {IIcomProps} from './IcomInterface'
import Icon from 'react-native-vector-icons/Fontisto'
import React from 'react'
import {TouchableOpacity} from 'react-native'

const Fontisto: React.FC<IIcomProps> = ({name, size, style, color, onPress}) => {
  if (onPress)
    return (
      <TouchableOpacity onPress={onPress}>
        <Icon name={name} size={size} style={style} color={color} />
      </TouchableOpacity>
    )
  return <Icon name={name} size={size} style={style} color={color} />
}

export default Fontisto
