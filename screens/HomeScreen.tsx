import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import Post from '../components/Post'

const HomeScreen = () => {
  type PostData={
    username:string,
    info:string,
    description:string,
    id:string
  }

  const dummyData:PostData[]=[{
    username:"User 1",
    info:"Mobile app developer",
    description:"I have completed the work on my latest project",
    id:"aaaa"
  },
  {
    username:"User 2",
    info:"Backend developer",
    description:"Just use php bro",
    id:"bbbb",
  },
  {
    username:"User 3",
    info:"Frontend developer",
    description:"Ai will take over my job",
    id:"cccc"
  }
  ]

  const render=function(item:PostData)
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
        <FlatList data={dummyData} renderItem={({item})=>render(item)}/>
      </View>
      <View className='h-14 bg-white'>
        <Navigation/>
      </View>
    </View>

  )
}

export default HomeScreen