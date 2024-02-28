import { View, Text } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import React from 'react'

export default function Post() {
  return (
    <View className='bg-white mt-2 p-2' style={{height:"50%"}}>
      <View className='bg-red-300 h-14 flex-row p-1'>
        <View className=' w-14 bg-gray-300 justify-center items-center rounded-full'>
        <FontAwesome name="user" size={34} color="white" />
        </View>
      </View>
    </View>
  )
}