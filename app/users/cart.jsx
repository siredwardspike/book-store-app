import { View, Text, useWindowDimensions, StyleSheet, FlatList, TextInput, Pressable } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Item from '../../components/userBookItem';
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-elements/dist/icons/Icon';
import { router, Link } from 'expo-router';

export default function profile() {
  const { height, width, fontScale } = useWindowDimensions();
  let imageWidth = width > 1200 ? width * 0.1 : width * 0.28;
  let imageHeight = height > 900 ? height * 0.15 : height * 0.2;
  return (
    <View style={{ padding: 5, backgroundColor: 'white', gap: 5, flexDirection: 'row', justifyContent: 'space-between' }}>

      <Text style={{ fontSize: height * width * 0.0001, color: '#2C4E70', fontWeight: 'bold' }}>Book Store</Text>


      <View style={{ flexDirection: "row" }}>
        <Link href='/' asChild>
          <Pressable style={{ marginHorizontal: 5, borderWidth: 2, padding: 5, borderRadius: 10, backgroundColor: 'white', borderColor: '#B3C8CF', width: 38, height: 38 }}>
            <Icon name='home' type="material" color="#2C4E70" />
          </Pressable>
        </Link>

        <Pressable onPress={() => { router.navigate(`/users/results`) }} style={{ borderWidth: 2, padding: 5, borderRadius: 10, backgroundColor: 'white', borderColor: '#B3C8CF', width: 38, height: 38 }}>
          <Icon name='search' type="material" color="#2C4E70" />
        </Pressable>
      </View>
    </View>
  )
}