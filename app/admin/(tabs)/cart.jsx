import { View, Text ,Image,useWindowDimensions, Pressable} from 'react-native'
import React from 'react'

export default function profile() {
    const {height, width,fontScale} = useWindowDimensions();

  return (
    <View style={{flex:1,backgroundColor:'#B3C8CF',justifyContent:'center'}}> 
      <Text>cart</Text>
    </View>
  
  )
}