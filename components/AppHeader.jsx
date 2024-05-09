import {
  View,
  Text,
  useWindowDimensions,
  Pressable,
  TextInput,
} from "react-native";
import React from "react";
import { Image } from "react-native";
import Icon from "react-native-elements/dist/icons/Icon";
import { router, Link } from "expo-router";

export default function AppHeader() {
  const { height, width, fontScale } = useWindowDimensions();

  return (
    <View style={{ padding: 5, backgroundColor: 'white', gap: 5, flexDirection: 'row', justifyContent: 'space-between' }}>

      <Text style={{ fontSize: height * width * 0.0001, color: '#2C4E70', fontWeight: 'bold' }}>Book Store</Text>


      <View style={{ flexDirection: "row" }}>
        <Pressable onPress={() => { router.navigate(`/users/profile`) }} style={{ borderWidth: 2, padding: 5, borderRadius: 10, backgroundColor: 'white', borderColor: '#B3C8CF', width: 38, height: 38 }}>
          <Icon name='account-circle' type="material" color="#2C4E70" />
        </Pressable>
        <Pressable onPress={() => { router.navigate(`/users/cart`) }} style={{ marginHorizontal: 5, borderWidth: 2, padding: 5, borderRadius: 10, backgroundColor: 'white', borderColor: '#B3C8CF', width: 38, height: 38 }}>
          <Icon name='shopping-cart' type="material" color="#2C4E70" />
        </Pressable>
        <Pressable onPress={() => { router.navigate(`/users/results`) }} style={{ borderWidth: 2, padding: 5, borderRadius: 10, backgroundColor: 'white', borderColor: '#B3C8CF', width: 38, height: 38 }}>
          <Icon name='search' type="material" color="#2C4E70" />
        </Pressable>

      </View>



    </View>
  )
}
