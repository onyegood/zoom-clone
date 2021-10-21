import {IIcomProps} from './IcomInterface'
import Icon from 'react-native-vector-icons/Entypo'
import React from 'react'
import {TouchableOpacity} from 'react-native'

const Entypo: React.FC<IIcomProps> = ({name, size, style, color, onPress}) => {
  if (onPress)
    return (
      <TouchableOpacity onPress={onPress} style={style}>
        <Icon name={name} size={size} color={color} />
      </TouchableOpacity>
    )
  return <Icon name={name} size={size} style={style} color={color} />
}

export default Entypo
