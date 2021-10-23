import {Image, StyleSheet, Text} from 'react-native'

import {IContact} from '../../models/IContact'
import React from 'react'
import {getInitials} from '../../utils/getInitials'
import {styles} from '../../styles/Styles'

const Avatar: React.FC<IContact> = ({photo, name}) => {
  if (photo) return <Image source={{uri: photo}} style={_styles.avatar} />
  return <Text style={_styles.initial}>{getInitials(name)}</Text>
}

const _styles = StyleSheet.create({
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: 'red',
    margin: 10,
    ...styles.a_i_c,
    ...styles.j_c_c,
  },
  initial: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '700',
  },
})

export default Avatar
