import ContactListComponent from '../../components/contact-list'
import MainLayout from '../../layout'
import React from 'react'

interface Props {}

const HomeScreen: React.FC<Props> = () => {
  return (
    <MainLayout>
      <ContactListComponent/>
    </MainLayout>
  )
}

export default HomeScreen
