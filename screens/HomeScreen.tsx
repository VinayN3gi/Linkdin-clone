import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import Post from '../components/Post'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { db } from '../firebaseconfig'


const HomeScreen = () => {
  type RetriveData={
    id:string,
    desc:string,
    photoUrl:string,
    key:number,
    name:string
  }

  const [posts,setPost]=useState<RetriveData[]>([])

  useEffect(()=>{

   const retrive=async function()
   {
     const value:RetriveData[]=[];
     try {
      const ref=collection(db,"post");
      const q=query(ref,orderBy("time"))
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        const id=doc.data().id;
        const desc=doc.data().desc;
        const photoUrl=doc.data().photoUrl;
        const key=doc.data().key;
        const name=doc.data().name
        value.push({id:id,desc:desc,photoUrl:photoUrl,key:key,name:name})
      });
      setPost(value)
     } 
     catch (error) {
      alert(error) 
     } 
   } 
   retrive();

  },[])



  const render=function(item:RetriveData)
  {
    return(
      <Post item={item}/>
    )
  }

  return (
    <View className=' bg-gray-200 flex-1'>
      <View>
      <Header/>
      </View>  
      <View className='flex-1'>
        <FlatList data={posts} renderItem={({item})=>render(item)}/>
      </View>
      <View className='h-14 bg-white'>
        <Navigation/>
      </View>
    </View>

  )
}

export default HomeScreen