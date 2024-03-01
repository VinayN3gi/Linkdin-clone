import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  
    
  const navigation:any=useNavigation();  
  return (
   <SafeAreaView>
    <View className='mt-3 h-16 justify-center flex-row  bg-white items-center rounded-md '>
        <View className=' ml-2 mr-2 bg-gray-300 w-10 h-10 justify-center items-center rounded-full flex-2'>
            <AntDesign name="user" size={24} color="black"/>
        </View>
        <View className='flex-1 justify-center h-full'>
            <View className=' mr-2 bg-gray-200 ml-2 h-10  justify-center rounded-lg flex-row'>
            <TouchableOpacity className=' justify-center mr-2 items-center ml-2'>
            <FontAwesome name="search" size={24} color="black"/>
            </TouchableOpacity>
            <TextInput placeholder='Search' className='flex-1 p-1 text-lg'/>
            </View>
        </View>
        <View className='flex-2  h-full w-12 justify-center items-center'>
            <TouchableOpacity onPress={()=>navigation.navigate("Message")}>
            <AntDesign name="message1" size={24} color="black" />
            </TouchableOpacity>
        </View>
    </View>
   </SafeAreaView>
  )
}

export default Header