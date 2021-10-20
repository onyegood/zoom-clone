import {SafeAreaView, StyleSheet, View} from 'react-native'

import HeaderComponent from '../components/header'
import React from 'react'
import SearchComponent from '../components/search-bar'
import TopMenuComponent from '../components/top-menu'

interface Props {}

const MainLayout: React.FC<Props> = ({
  children
}) => {
  return (
    <View style={_styles.container}>
    <SafeAreaView style={_styles.safeAreaView}>
      <HeaderComponent />
      <SearchComponent />
      <TopMenuComponent />
      {children}
    </SafeAreaView>
    </View>

  )
}

const _styles = StyleSheet.create({
  container: {
    backgroundColor: '#1c1c1c',
    padding: 15
  },
  safeAreaView: {
    height: '100%'
  }
})
export default MainLayout
