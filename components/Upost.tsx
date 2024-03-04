import { View, Text, Image } from 'react-native'
import React from 'react'
import { auth } from '../firebaseconfig'
import { FontAwesome } from '@expo/vector-icons';

const Upost = ({item}:any) => {
  if(auth.currentUser?.uid===item.id)
  {
    return(
        <View className='bg-white mt-2 p-2  h-72' key={item.key}>
      <View className=' h-14 flex-row p-1 '>
        <View className='w-12 bg-gray-300 justify-center items-center rounded-full'>
        <FontAwesome name="user" size={34} color="white" />
        </View>
        <View className='  ml-3'>
        <Text className=' font-semibold text-lg '>{item.name}</Text>
        <Text className='text-md'>{item.info}</Text>
        </View>
      </View>
      <View className=' h-10'>
        <View className=' p-1'>
          <Text className=' text-lg'>{item.desc}</Text>
        </View>
      </View>
      <View>
        <Image className=" h-44 w-full"source={{uri:item.photoUrl}}/>
      </View>
    </View>
  )
  }
}

export default Upost