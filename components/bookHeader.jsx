import { View, Text, useWindowDimensions, Pressable, TextInput } from 'react-native'
import React from 'react'
import { Image } from 'react-native';
import Icon from 'react-native-elements/dist/icons/Icon';
import { router,Link } from 'expo-router';

export default function BookHeader(link) {
  const { height, width, fontScale } = useWindowDimensions();

  return (
    <View style={{ padding: 5, backgroundColor: 'white', gap: 5, flexDirection: 'row', justifyContent: 'space-between' }}>

    <Text style={{ fontSize: height * 0.04, color: '#2C4E70', fontWeight: 'bold' }}>Book Store</Text>
    <View style={{flexDirection:'row'}}>
        <Link href='/' asChild>
            <Pressable style={{ borderWidth: 2, marginHorizontal: 5, borderRadius: 10, backgroundColor: 'white', borderColor: '#B3C8CF', width: 38, height: 38, justifyContent: "center", alignContent: "center" }} >
                <Icon name='arrow-back' type="material" color="#2C4E70" />
            </Pressable>
        </Link>
        <Link href='/results' asChild>
            <Pressable style={{ borderWidth: 2, padding: 5, borderRadius: 10, backgroundColor: 'white', borderColor: '#B3C8CF',width: 38, height: 38 }}>
                <Icon name='search' type="material" color="#2C4E70" />
            </Pressable>
        </Link >
    </View>



</View>
  )
}