import React, { useState } from "react";
import {
  View,
  Text,
  useWindowDimensions,
  Pressable,
  TextInput,
} from "react-native";
import { Image } from "react-native";
import Icon from "react-native-elements/dist/icons/Icon";
import { Link, router } from "expo-router";

export default function UsrItem({ item }) {
  const { height, width, fontScale } = useWindowDimensions();
  const [text, setText] = useState("approve");
  const [quantity, setQuantity] = useState(1);
  let imageWidth = width > 1200 ? width * 0.1 : width * 0.28;
  let imageHeight = height > 900 ? height * 0.1 : height * 0.2;

  return (
    <Pressable
      style={{ padding: 12, marginHorizontal: 3 }}
      onPress={() => {
        router.navigate(`/users/${item.id}`);
      }}
    >
     
    </Pressable>
  );
}
