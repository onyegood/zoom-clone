import {ScrollView, StyleSheet, Text, View} from 'react-native'

import AntDesign from '../icons/AntDesign'
import Avatar from '../avatar'
import React from 'react'
import {styles} from '../../styles/Styles'

interface Props {}

const persons = [
  {
    id: 1,
    type: 'starred',
  },
  {
    id: 3,
    name: 'Ofoegbu Goodnews',
    photo:
      'https://cdn.shopify.com/s/files/1/0045/5104/9304/files/Shave-and-Beard-2020.jpg?v=1608649489',
    type: 'contact',
  },
  {
    id: 2,
    name: 'Jane',
    photo:
      'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5faad4255239c9448d6c7bcd%2FBest-Animal-Photos-Contest--Close-Up-Of-baby-monkey%2F960x0.jpg%3Ffit%3Dscale',
    type: 'contact',
  },
  {
    id: 4,
    name: 'Ben Pedro',
    photo:
      'https://cdn.shopify.com/s/files/1/0045/5104/9304/t/27/assets/AC_ECOM_SITE_2020_REFRESH_1_INDEX_M2_THUMBS-V2-3.jpg',
    type: 'contact',
  },
]

const ContactListComponent: React.FC<Props> = () => {
  return (
    <ScrollView style={_styles.row}>
      {persons.map(item => (
        <View style={_styles.container} key={item.id}>
          <View style={_styles.avatar}>
            {item.type === 'starred' ? (
              <AntDesign name='star' size={30} color='#ffffff' />
            ) : (
              <Avatar {...item} />
            )}
          </View>
          <View>
            <Text style={_styles.title}>{item.name ?? 'Starred'}</Text>
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
    margin: 10,
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
  row: {
    marginTop: 20,
  },
})
export default ContactListComponent
