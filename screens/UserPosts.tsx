import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { db } from '../firebaseconfig'
import Upost from '../components/Upost'

const UserPosts = () => {

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
           console.log(value)
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
        <Upost item={item}/>
      )
    } 
    
    
  return (
    <View>
      <View className=' justify-center items-center mt-3 mb-2'>
        <Text className='font-semibold text-xl'>Your posts</Text>
      </View>
        <View>
        <FlatList data={posts} renderItem={({item})=>render(item)}/>
      </View>
    </View>
  )
}

export default UserPosts