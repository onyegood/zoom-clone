import {Text, View} from 'react-native'

import Fontisto from '../icons/Fontisto'
import React from 'react'

interface Props {}

const SearchComponent: React.FC<Props> = () => {
  return (
    <View>
      <Fontisto name='search' size={20} color='#858585' />
    </View>
  )
}

export default SearchComponent
