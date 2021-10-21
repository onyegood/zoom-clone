import {StyleSheet, Text, View} from 'react-native'

import Fontisto from '../icons/Fontisto'
import React from 'react'

interface Props {}

const SearchComponent: React.FC<Props> = () => {
  return (
    <View style={_style.container}>
      <Fontisto name='search' size={20} color='#858585' />
      <Text style={_style.searchText}>Search</Text>
    </View>
  )
}

const _style = StyleSheet.create({
  container: {
    backgroundColor: '#333333',
    flexDirection: 'row',
    paddingHorizontal: 10,
    height: 40,
    alignItems: 'center',
    borderRadius: 10
  },
  searchText: {
    color: '#858585',
    paddingLeft: 10,
    fontSize: 20
  }
})
export default SearchComponent
