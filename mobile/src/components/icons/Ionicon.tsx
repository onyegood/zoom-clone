import { IIcomProps } from './IcomInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';

const Ionicon: React.FC<IIcomProps> = ({name, size, style, color}) => (
  <Icon name={name} size={size} style={style} color={color} />
)

export default Ionicon;