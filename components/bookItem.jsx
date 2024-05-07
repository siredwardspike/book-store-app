import React, { useState } from "react";
import {
  View,
  Text,
  useWindowDimensions,
  Pressable,
  Image,
  Alert,
} from "react-native";
import Icon from "react-native-elements/dist/icons/Icon";

export default function Item({ item, onDeleteBook }) {
  const { height, width, fontScale } = useWindowDimensions();

  const imageWidth = width > 1200 ? width * 0.2 : width * 0.28;
  const imageHeight = height > 900 ? height * 0.15 : height * 0.2;

  return (
    <View style={{ marginHorizontal: 12 }}>
      <View
        style={{
          flexDirection: "row",
          marginLeft: 1,
          marginTop: 5,
          backgroundColor: "#BED7DC",
          borderRadius: 20,
          padding: 7,
        }}
      >
        <Image
          source={{ uri: item.imageUri }}
          style={{
            width: imageWidth * 0.9,
            height: imageHeight * 0.9,
            marginTop: 0,
            marginLeft: 2,
            borderRadius: 10,
          }}
        />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text
            style={{
              fontSize: width > 1200 ? fontScale * 22 : fontScale * 22,
              marginTop: 7,
            }}
          >
            {item.name}
          </Text>
          <Text
            style={{ fontSize: width > 1200 ? fontScale * 20 : fontScale * 18 }}
          >
            {item.author}
          </Text>
          <Text
            style={{ fontSize: width > 1200 ? fontScale * 20 : fontScale * 18 }}
          >
            {item.category}
          </Text>
          <Text
            style={{ fontSize: width > 1200 ? fontScale * 20 : fontScale * 18 }}
          >
            {item.price}
          </Text>
          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <Pressable
              onPress={() => {}}
              style={{
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
                marginRight: 10,
              }}
            >
              <Icon name="add" type="material" color="#2C4E70" />
            </Pressable>
            <Pressable
              onPress={() => onDeleteBook(item.id)}
              style={{
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon name="delete" type="material" color="#FF6347" />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}
