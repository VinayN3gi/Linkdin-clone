import { View, Text, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebaseconfig';

const Message = ({item}:any,) => {
    const a=true;
    const navigation:any=useNavigation()

    const onClick=function()
    {
        navigation.navigate("MessageModal",item)
    }

    if(auth.currentUser?.uid!==item.id)
    {
        return(
            <TouchableOpacity onPress={onClick}>
            <View className=' bg-white h-22 mt-2 mb-2 flex-row'>
                <View className=' bg-gray-200  w-14 h-14 justify-center mb-1  items-center rounded-full mt-1 ml-1'>
                <FontAwesome name="user" size={34} color="white"/>
                </View>
                <View className=' items-center justify-top mt-2 ml-2'>
                    <Text className=' font-bold text-lg'>{item.name}</Text>
                </View>
            </View>
            </TouchableOpacity>
        )
    }
}

export default Message