import { IIcomProps } from './IcomInterface';
import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';

const ForntAwesome5: React.FC<IIcomProps> = ({name, size, style, color}) => (
  <Icon name={name} size={size} style={style} color={color} />
)

export default ForntAwesome5;