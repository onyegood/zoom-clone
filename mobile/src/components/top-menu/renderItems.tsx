import { StyleSheet, Text, View } from "react-native"

import ForntAwesome from "../icons/ForntAwesome"
import React from "react"
import { styles } from "../../styles/Styles"

const items = [
  {
    id: 1,
    name: 'video-camera',
    title: 'New Meeting',
  },
  {
    id: 2,
    name: 'plus-square',
    title: 'Join',
  },
  {
    id: 3,
    name: 'calendar',
    title: 'Schedule',
  },
  {
    id: 4,
    name: 'upload',
    title: 'Share Screen',
  },
]

export const renderItems = () => {
  return items.map(item => (
    <View key={item.id} style={styles.a_i_c}>
      <ForntAwesome
        name={item.name}
        size={23}
        color='#efefef'
        style={_style.button}
        onPress={() => {}}
      />
      <Text style={_style.menuText}>{item.title}</Text>
    </View>
  ))
}

const _style = StyleSheet.create({
  menuText: {
    color: '#858585',
    fontSize: 12,
    paddingTop: 10,
    fontWeight: '200',
  },
  button: {
    height: 50,
    width: 50,
    backgroundColor: 'blue',
    borderRadius: 15,
    ...styles.j_c_c,
    ...styles.a_i_c
  }
})