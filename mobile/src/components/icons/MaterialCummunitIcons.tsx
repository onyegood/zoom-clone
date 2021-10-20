import { IIcomProps } from './IcomInterface';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';

const MaterialCummunitIcons: React.FC<IIcomProps> = ({name, size, style, color}) => (
  <Icon name={name} size={size} style={style} color={color} />
)

export default MaterialCummunitIcons;