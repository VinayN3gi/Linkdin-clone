import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { auth, db } from '../firebaseconfig';
import { collection, getDocs } from 'firebase/firestore';


const ProfileModal = () => {
  
  const [name,setName]=useState<string>("")  


  useEffect(()=>{
    const retrive=async function()
    {
        try {
            let value="";
            const querySnapshot = await getDocs(collection(db, "users"));
            querySnapshot.forEach((doc) => {
              if(doc.data().id===auth.currentUser?.uid){
                value=doc.data().name
              }  
            });  
            setName(value)
        } catch (error) {
            alert(error)
        }
    }
    retrive()
  },[])  

  return (
    <View className='bg-gray-100 h-full items-center'style={{width:"50%"}}>
     <View className='mt-8  h-24 w-24 rounded-full'>
     <Image  className="h-full w-full rounded-full "source={{uri:"https://st2.depositphotos.com/2559749/11304/v/450/depositphotos_113040644-stock-illustration-flat-icon-isolate-on-white.jpg"}}/>
     </View>
     <View className='mt-4'>
        <Text className='text-2xl font-bold'>{name}</Text>
     </View>
     <TouchableOpacity>
     <Text className='mt-3 font-semibold text-lg'>Your posts</Text>
     </TouchableOpacity>
    </View>
  )
}

export default ProfileModal