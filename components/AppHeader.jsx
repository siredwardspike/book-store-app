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

  let imageWidth = width > 1200 ? width * 0.1 : width * 0.28;
  let imageHeight = height > 900 ? height * 0.08 : height * 0.2;

  return (
    <View style={{ padding: 5, backgroundColor: 'white', gap: 5, flexDirection: 'row', justifyContent: 'space-between' }}>




    </View>
  )
}
