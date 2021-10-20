import { IIcomProps } from './IcomInterface';
import Icon from 'react-native-vector-icons/AntDesign';
import React from 'react';

const AntDesign: React.FC<IIcomProps> = ({name, size, style, color}) => (
  <Icon name={name} size={size} style={style} color={color} />
)

export default AntDesign;