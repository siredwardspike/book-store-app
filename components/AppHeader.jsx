import { View, Text, useWindowDimensions, Pressable, TextInput } from 'react-native'
import React from 'react'
import { Image } from 'react-native';
import Icon from 'react-native-elements/dist/icons/Icon';

export default function AppHeader() {
  const { height, width, fontScale } = useWindowDimensions();

  return (
    <View style={{padding:5, backgroundColor:'white',gap:5}}>
            <View>
                <Text style={{fontSize:height*0.04,color:'#2C4E70',fontWeight:'bold'}}>Book Store</Text>
            </View>

            <View style={{flexDirection:'row',gap:10,justifyContent:'space-around'}}>
                <TextInput placeholder='Search for a book !' style={{borderRadius:50, backgroundColor:'white', borderWidth:2, width:width*0.8,textAlign:'center',borderColor:'#B3C8CF',placeholderTextColor:'grey',fontSize:height*0.02}}></TextInput>
                <Pressable style={{borderWidth:2,padding:5,borderRadius:10,backgroundColor:'white',borderColor:'#B3C8CF'}}>
                <Icon name='search' type="material" color="#2C4E70" />
                </Pressable>
            </View>

    </View>
  )
}