import HeaderComponent from '../components/header'
import React from 'react'
import {SafeAreaView} from 'react-native'
import SearchComponent from '../components/search-bar'
import TopMenuComponent from '../components/top-menu'

interface Props {}

const MainLayout: React.FC<Props> = ({
  children
}) => {
  return (
    <SafeAreaView>
      <HeaderComponent />
      <SearchComponent />
      <TopMenuComponent />
      {children}
    </SafeAreaView>
  )
}

export default MainLayout
