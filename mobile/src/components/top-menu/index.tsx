import {StyleSheet, View} from 'react-native'

import React from 'react'
import { renderItems } from './renderItems'
import { styles } from '../../styles/Styles'

interface Props {}


const TopMenuComponent: React.FC<Props> = () => {
  return (
    <View style={_style.container}>
      {renderItems()}
    </View>
  )
}

const _style = StyleSheet.create({
  container: {
    marginTop: 25,
    marginBottom: 10,
    borderBottomColor: '#1f1f1f',
    borderBottomWidth: 1,
    ...styles.f_d_r,
    ...styles.j_c_s_b
  }
})

export default TopMenuComponent
