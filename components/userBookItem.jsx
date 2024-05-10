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
import { getBook } from "../firebase/firestore_fun";
// "https://i.pinimg.com/564x/22/63/82/226382aa5680ba4c76a8c6697bbe4321.jpg"
export default function UsrItem({ item }) {
  const { height, width, fontScale } = useWindowDimensions();

  let imageWidth = width > 1200 ? width * 0.1 : width * 0.28;
  let imageHeight = height > 900 ? height * 0.1 : height * 0.2;

  return (
    <Pressable
      style={{ padding: 12 ,marginHorizontal:3}}
      onPress={async () => {
        router.navigate(`/users/${item.id}`);
      }}
    >
      <View
        style={{
          flexDirection: "column",
          backgroundColor: "white",
          borderRadius: 20,
          alignSelf: "center",
          alignItems: "center",
          width: width * 0.4,
        }}
      >
        <Image
          source={{
            uri: item.image,
          }}
          style={{
            width: imageWidth * imageHeight * 0.01,
            height: imageHeight * imageWidth * 0.015,
            borderRadius: 10,
          }}
        />
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: imageHeight * imageWidth * 0.0015,
              color: "#2C4E70",
            }}
          >
            {item.name}
          </Text>
          <View style={{alignContent:"center",alignItems:"center"}}>
            <Text
              style={{
                fontWeight: "400",
                fontSize: imageHeight * imageWidth * 0.001,
                color: "#2C4E70",
              }}
            >
              {item.category}
            </Text>
            <View style={{ flexDirection: "row-reverse", alignItems: "center" }}>
              <Pressable onPress={() => { }} style={{}}>
                <Icon name="add" type="material" color="#2C4E70" />
              </Pressable>
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: imageHeight * imageWidth * 0.0009,
                  color: "#2C4E70",
                }}
              >
                {item.price}
              </Text>
            </View>

          </View>
        </View>
      </View>
    </Pressable>
  );
}
