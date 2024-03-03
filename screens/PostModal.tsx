import { View, Text, KeyboardAvoidingView, TouchableOpacity, TextInput, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Entypo } from '@expo/vector-icons';
import { addDoc, collection, getDocs } from "firebase/firestore"; 
import { auth, db } from '../firebaseconfig';
import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';

const PostModal = () => {

  const [image,setImage]=useState<string>("https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg")
  const navigation:any=useNavigation();  
  const [desc,setDesc]=useState<string>("")
  const uploadImage=async function():Promise<void>
  {
    try {
      await ImagePicker.requestMediaLibraryPermissionsAsync();
      const result=await ImagePicker.launchImageLibraryAsync({
        mediaTypes:ImagePicker.MediaTypeOptions.Images,
        allowsEditing:true,
        aspect:[1,1],
        quality:1
      })
      const assest=result.assets ? result.assets : [];
      console.log(assest[0].uri)
      setImage(assest[0].uri)
    } 
    catch (error) {
       alert(error)   
    }
  }  
  
  const store=async function() {
    try {
        const docRef = await addDoc(collection(db, "post"), {
          first: auth.currentUser?.uid,
          desc:desc,
          imageUri:image,
          key:Math.random()*100000
        });
        console.log("Document written with ID: ", docRef.id);
        navigation.navigate("Home")
      } catch (e) {
        console.error("Error adding document: ", e);
      }
         
  }


  return (
   <KeyboardAvoidingView className=' bg-white h-full'>
   <View className='h-20 w-full  flex-row mt-1 items-center justify-between'>
    <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
    <Entypo name="cross" size={40} color="gray" />    
    </TouchableOpacity>
    <TouchableOpacity className='bg-gray-300 h-10 text-center w-20 justify-center mr-1 rounded-full' onPress={store}>
        <Text className='text-center font-bold text-lg text-white'>Post</Text>
    </TouchableOpacity>
   </View>
   <View className='h-96 flex-1'>
    <TextInput  className="mt-2 text-xl ml-1" autoFocus placeholder="What do you want to talk about" onChangeText={(text)=>setDesc(text)} value={desc}/>
   </View>
   <View  className=' bg-slate-900 h-80 '>
    <Image source={{uri:image}} className='h-full w-full'/>
   </View>
   <View className='h-10  mt-1'>
    <TouchableOpacity className='justify-center mt-1 ml-2 mb-1' onPress={uploadImage}>
    <MaterialIcons name="perm-media" size={35} color="black" /> 
    </TouchableOpacity>
   </View>
   </KeyboardAvoidingView>
  )
}

export default PostModal