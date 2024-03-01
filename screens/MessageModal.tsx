import { View, Text } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native'

const MessageModal = ({route}:any) => {
    const {name}=route.params;
  return (
    <View className='bg-gray-200 h-full'>
       <View className='bg-white h-20 justify-center flex-row'>
        <View className=' flex-1 justify-center '>
        <View className='p-1'>
        <Feather name="arrow-left" size={30} color="black" />
        </View>
        </View>
       </View>
    </View>
  )
}

export default MessageModal