import { View, Text } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import Post from '../components/Post'

const HomeScreen = () => {
  return (
    <View className=' bg-gray-200 flex-1'>
      <View>
      <Header/>
      </View>  
      <View className='flex-1'>
        <Post/>
      </View>
      <View className='h-14 bg-white'>
        <Navigation/>
      </View>
    </View>

  )
}

export default HomeScreen