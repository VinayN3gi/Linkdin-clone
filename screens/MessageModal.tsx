import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { auth, db } from '../firebaseconfig';
import { QuerySnapshot, addDoc, collection, doc, getDoc, getDocs, orderBy, query, serverTimestamp, setDoc } from "firebase/firestore"; 

const MessageModal = ({navigation,route}:any) => {
  type Data={
    id:string,
    message:string,
    key:number
  }
  const {id}=route.params;
  const {name}=route.params;
  const [message,setMessage]=useState<string>("");
  const [retriveData,setData]=useState<Data[]>([]) ;
  const uid:string= auth.currentUser?.uid ? auth.currentUser.uid : "No user";
  useEffect(()=>{
    const retrive=async function()
    {
      const value:Data[]=[];
      const querySnapshot=await getDocs(collection(db,uid));
      querySnapshot.forEach((doc)=>{
        const id=doc.data().id
        const message=doc.data().message
        const key=doc.data().key
        value.push({id:id,message:message,key:key})  
      })
      setData(value)
    }
    retrive()
  },[message])

  const render=function(item:Data):any
    {
        
        if(item.id!==uid)
        {
            return(
                <View key={item.key} className=' bg-blue-400  w-40  h-16 rounded-full items-center justify-center mt-2 ml-2' style={{position:'relative', alignSelf:"flex-start"}}>
                    <Text className='text-center text-white text-lg '>{item.message}</Text>
                </View>
            )
        }
        else{
            return(
                <View key={item.key} className=' bg-blue-600 w-40 h-16 rounded-full items-center justify-center mt-2 mr-2' style={{position:"relative",alignSelf:"flex-end"}}>
                    <Text className='text-white text-lg'>{item.message}</Text>
                </View>
            )
        }
    }
  
  const otherUserStore= async function()
  {
    try{
      await addDoc(collection(db,id),{
        id:auth.currentUser?.uid,
        message:message,
        time:serverTimestamp(),
        key:Math.random()*100000,
      })
      console.log("Phase 2 complete")
    } 
    catch(error){alert(error)}
    
  }

  const store=async function()
  {
    try {
      await addDoc(collection(db,uid), {
        id:auth.currentUser?.uid,
        message:message,
        time:serverTimestamp(),
        key:Math.random()*100000,
      });
      setMessage("")
      console.log("Phase 1 complete")
      otherUserStore()
    } catch (error) {
      alert(error)
    }
  }  

  return (
    <KeyboardAvoidingView className='bg-gray-200 h-full'>
       <View className='bg-white h-20 justify-center flex-row'>
        <View className=' flex-1 justify-center '>
        <View className='p-1'>
        <TouchableOpacity onPress={()=>navigation.replace("Home")}>
        <Feather name="arrow-left" size={30} color="black" />
        </TouchableOpacity>
        </View>
        </View>
       </View>
       <View className='flex-1 '>
        <FlatList data={retriveData} renderItem={({item})=>render(item)}/>
       </View>
       <View className=' h-14 bg-white flex-row items-center'>
        <View className='b h-full justify-center flex-1'>
        <TextInput placeholder='Enter message' className='text-xl' onChangeText={(text)=>setMessage(text)} value={message}/>
        </View>
        <TouchableOpacity className=' h-full justify-center ' onPress={store}>
        <Ionicons name="send" size={30} color="black" />
        </TouchableOpacity>
       </View>
    </KeyboardAvoidingView>
  )
}

export default MessageModal