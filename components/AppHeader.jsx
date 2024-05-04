import { View, Text, useWindowDimensions, Pressable, TextInput } from 'react-native'
import React from 'react'
import { Image } from 'react-native';
import Icon from 'react-native-elements/dist/icons/Icon';

export default function AppHeader() {
  const { height, width, fontScale } = useWindowDimensions();

  return (
    <View style={{ padding: 10, paddingBottom: 10, gap: 5 }}>
      <View>
        <Text style={{ fontSize: width > 1200 ? fontScale * 50 : fontScale * 20, color: '#2C4E80', fontWeight: 'bold'}}>Book Store</Text>
      </View>

      <View style={{ flexDirection: 'row', gap: 10, justifyContent: 'space-around' }}>
        <TextInput placeholder='Search for a book !' style={{ borderRadius: 50, backgroundColor: 'white', borderWidth: 2, width: width * 0.8, textAlign: 'center', borderColor: '#B3C8CF' }}></TextInput>
        <Pressable style={{ borderWidth: 2, padding: 5, borderRadius: 10, backgroundColor: 'white', borderColor: '#B3C8CF' }}>
          <Icon name='search' type="material" color="#2C4E70" style={{}}/>
        </Pressable>
      </View>

    </View>
  )
}