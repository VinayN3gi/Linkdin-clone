import { View, Text, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Navigation = () => {
  const navigation:any=useNavigation();
  return (
    <View className='flex-row justify-between items-center rounded-xl'>
        <TouchableOpacity className=' mt-2 ml-2'>
        <Entypo name="home" size={30} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity className='mt-2 justify-center'>
        <Ionicons name="people" size={30} color="gray"/>
        </TouchableOpacity>
        <TouchableOpacity className='mt-2' onPress={()=>navigation.navigate("PostModal")}>
        <AntDesign name="plussquareo" size={30} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity className='mt-2'>
        <Ionicons name="notifications" size={30} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity className='mt-2 mr-2'>
        <FontAwesome5 name="briefcase" size={30} color="gray" />
        </TouchableOpacity>
        </View>
  )
}

export default Navigation