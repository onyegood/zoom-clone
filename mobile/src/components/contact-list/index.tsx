import {ScrollView, StyleSheet, Text, View} from 'react-native'

import React from 'react'
import {styles} from '../../styles/Styles'

interface Props {}

const persons = [
  {
    id: 1,
    name: 'Ofoegbu Goodnews',
    title: 'Front-End Developer',
    initial: 'OG',
  }
]

const ContactListComponent: React.FC<Props> = () => {
  return (
    <ScrollView>
      {persons.map(item => (
        <View style={_styles.container} key={item.id}>
          <View style={_styles.avatar}>
            <Text style={_styles.initial}>{item.initial}</Text>
          </View>
          <View>
            <Text style={_styles.title}>{item.name}</Text>
            {/* <Text style={_styles.subTitle}>{item.title}</Text> */}
          </View>
        </View>
      ))}
    </ScrollView>
  )
}

const _styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: 'red',
    margin: 16,
    ...styles.a_i_c,
    ...styles.j_c_c,
  },
  initial: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '700',
  },
  title: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
  subTitle: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '300',
    marginTop: 4,
  },
})
export default ContactListComponent
