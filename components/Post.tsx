import { View, Text } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import React from 'react'

export default function Post({item}:any){

  if(item.id!=="aaaa")
  {
  return (
    <View className='bg-white mt-2 p-2  h-44'>
      <View className=' h-14 flex-row p-1 '>
        <View className='w-12 bg-gray-300 justify-center items-center rounded-full'>
        <FontAwesome name="user" size={34} color="white" />
        </View>
        <View className='  ml-3'>
        <Text className=' font-semibold text-lg '>{item.username}</Text>
        <Text className='text-md'>{item.info}</Text>
        </View>
      </View>
      <View className=' h-24'>
        <View className=' p-1'>
          <Text className=' text-lg'>{item.description}</Text>
        </View>
      </View>
    </View>
  )
  }
}