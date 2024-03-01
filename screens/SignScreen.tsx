import { View, Text, KeyboardAvoidingView, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { auth, db } from '../firebaseconfig';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { collection, addDoc } from "firebase/firestore"; 




const SignScreen = ({navigation}:any) => {

  const [name,setName]=useState<string>("");
  const [email,setEmail]=useState<string>("");
  const [password,setPassword]=useState<string>("");
  
  const join=function()
  {
    if(name!=="" && password!=="" && email!=="")
    {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            store();
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(error)
            // ..
        });
    }
    else alert("One of the field is empty")
  }  


  const store=async function()
  {
    try {
      const docRef = await addDoc(collection(db, "users"), {
       name:name,
       id:auth.currentUser?.uid
      });
      console.log("Document written with ID: ", docRef.id);
      navigation.navigate("Home");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    
  }

  return (
    <KeyboardAvoidingView className=' justify-start items-center bg-white h-full'>
        <View className=' justify-center items-center '>
            <Image className="w-32  h-32 mt-40 justify-center items-center " source={{uri:"https://img.freepik.com/premium-vector/square-linkedin-logo-isolated-white-background_469489-892.jpg"}}/>
        </View>
        <View className='mt-3'>
            <Text className=' font-semibold text-lg'>Make the most of your professional life</Text>
        </View>
        <View className='mt-4 bg-gray-200   w-72  h-16 rounded-full  flex-row items-center p-1'>
        <View className='mr-4 ml-3'>
        <FontAwesome name="user" size={24} color="black" />
        </View>
         <TextInput onChangeText={(text)=>setName(text)} value={name} placeholder='username' className=' text-xl '/> 
      </View>
      <View className='mt-4 bg-gray-200 w-72  h-16 rounded-full  flex-row items-center p-1 '>
        <View className='mr-4 ml-3'>
        <Fontisto name="email" size={24} color="black" />
        </View>
         <TextInput onChangeText={(text)=>setEmail(text)} value={email} placeholder='email...' className=' text-xl '/> 
      </View>
      <View className='mt-4 bg-gray-200   w-72  h-16 rounded-full  flex-row items-center p-1'>
        <View className='mr-4 ml-3'>
        <Entypo name="lock" size={24} color="black" />
        </View>
         <TextInput onChangeText={(text)=>setPassword(text)} value={password} secureTextEntry={true} placeholder='password...' className=' text-xl '/> 
      </View>
      <TouchableOpacity onPress={join} className='mt-6 bg-blue-400   w-72  h-16 rounded-full  flex-row items-center p-1 justify-center'>
        <Text className=' text-lg text-white'>Join</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

export default SignScreen