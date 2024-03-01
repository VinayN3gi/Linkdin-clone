import { View, Text, KeyboardAvoidingView, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import Message from '../components/Message'

const MessageScreen = () => {

  type Data={
    id:string,
    name:string,
  }  

  const data:Data[]=[
    {id:"aa",name:"User 1"},
    {id:"bb",name:"User 2"},
    {id:"cc",name:"User 3"},
    {id:"dd",name:"User 4"}
  ]

  const render=(item:Data)=>
  {
    return(
        <TouchableOpacity pressRetentionOffset={0.2}>
            <Message item={item}/>
        </TouchableOpacity>
    )

  }

  return (
      <KeyboardAvoidingView className=' bg-gray-200 h-full'>
    <View className=' justify-center items-center bg-blue-400 h-20'>
        <Text className=' text-xl text-white '>Messages</Text>
    </View>
    <FlatList data={data} renderItem={({item})=>render(item)}/>
  </KeyboardAvoidingView>
  )
}

export default MessageScreen
