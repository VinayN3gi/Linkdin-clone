import { View, Text, KeyboardAvoidingView, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Message from '../components/Message'
import { db } from '../firebaseconfig'
import { collection, getDocs } from 'firebase/firestore'
const MessageScreen = ({navigation}:any) => {
  
  type Data={
    id:string,
    name:string,
  }  

  const [userList,setUserlist]=useState<Data[]>([]);

  useEffect(()=>{
    const retrive=async function()
    {
       const value:Data[]=[]; 
       try{
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
        const id=doc.data().id;
        const name=doc.data().name;
        value.push({id:id,name:name})    
        });
        setUserlist(value);
        console.log(userList)
       }
       catch(error)
       {
        alert(error)
       }
    }
    retrive()
  },[])

  const data:Data[]=[
    {id:"aa",name:"User 1"},
    {id:"bb",name:"User 2"},
    {id:"cc",name:"User 3"},
    {id:"dd",name:"User 4"}
  ]




  const render=(item:Data)=><Message item={item}/>

  return (
      <KeyboardAvoidingView className=' bg-gray-200 h-full'>
    <View className=' justify-center items-center bg-blue-400 h-20'>
        <Text className=' text-xl text-white '>Messages</Text>
    </View>
    <FlatList data={userList} renderItem={({item})=>render(item)}/>
  </KeyboardAvoidingView>
  )
}

export default MessageScreen
