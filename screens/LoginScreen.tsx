import { View, Text, KeyboardAvoidingView, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { app, auth } from '../firebaseconfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
const LoginScreen = ({navigation}:any) => {

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const logIn=function()
  {
    if(email!=="" || password!=="")
    {
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigation.navigate("Home")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    }
    else alert('One of the field is empty')
  }

  return (
    <KeyboardAvoidingView className=' justify-start items-center bg-white h-full'>
      <View className=' justify-center items-center '>
        <Image className=" w-32  mt-48 h-32"source={{uri:"https://img.freepik.com/premium-vector/square-linkedin-logo-isolated-white-background_469489-892.jpg"}}/>
      </View>
      <Text className='text-4xl mt-5 text-gray-300'>Login</Text>
      <View className='mt-4 bg-gray-200   w-72  h-16 rounded-full  flex-row items-center p-1'>
        <View className='mr-4 ml-3'>
        <AntDesign name="user" size={24} color="black"/>
        </View>
         <TextInput placeholder='email...' className=' text-xl ' onChangeText={(text)=>setEmail(text)} value={email}/> 
      </View>
      <View className='mt-4 bg-gray-200   w-72  h-16 rounded-full  flex-row items-center p-1'>
        <View className='mr-4 ml-3'>
        <Entypo name="lock" size={24} color="black" />
        </View>
         <TextInput onChangeText={(text)=>setPassword(text)} value={password} secureTextEntry={true} placeholder='password...' className=' text-xl '/> 
      </View>
      <TouchableOpacity  onPress={logIn}className='mt-6 bg-blue-400   w-72  h-16 rounded-full  flex-row items-center p-1 justify-center'>
        <Text className=' text-lg text-white'>Log in</Text>
      </TouchableOpacity>
      <View className='mt-6 flex-row justify-center items-center'>
        <Text className='text-lg text-center font-semibold'>New to linkedin ?</Text>
        <TouchableOpacity>
        <Text className='text-lg text-center text-blue-500 font-semibold underline'>Join now</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen