import {
  View,
  Text,
  useWindowDimensions,
  StyleSheet,
  FlatList,
  TextInput,
  Pressable,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Item from "../../components/cartBookItem";
import React, { useEffect, useState } from "react";
import Icon from "react-native-elements/dist/icons/Icon";
import { router, Link } from "expo-router";

let books = [
  {
    userId: 0,
    name: "book1",
    author: "Segara",
    category: "science",
    price: 120,
    favorite: false,
    quantity: 1,
  },
  {
    userId: 0,
    name: "book2",
    author: "Segara",
    category: "Fantasy",
    price: 15,
    favorite: false,
    quantity: 1,
  },
  {
    userId: 2,
    name: "book3",
    author: "Segara",
    category: "coding",
    price: 25,
    favorite: false,
    quantity: 1,
  },
];

export default function profile() {
  const { height, width, fontScale } = useWindowDimensions();
  let imageWidth = width > 1200 ? width * 0.1 : width * 0.28;
  let imageHeight = height > 900 ? height * 0.15 : height * 0.2;
  const [bookData, setBookData] = useState([...books]);

  const renderItem = ({ item, index }) => {
    const updateQuantity = (newQuantity) => {
      const updatedBooks = [...bookData];
      updatedBooks[index].quantity = newQuantity;
      setBookData(updatedBooks);
    };
    if (item.quantity >= 1)
      return (
        <View style={{ alignContent: "center", alignItems: "center" }}>
          <Item item={item} />
          <View style={{padding:10}}>
            <View style={{ flexDirection: "row", gap: 13 }}>
              <Pressable onPress={() => updateQuantity(item.quantity - 1)}>
                <Icon name="remove" type="material" color="#2C4E70" />
              </Pressable>
              <Text style={{ marginTop: 2, color: "#2C4E70" }}>{item.quantity}</Text>
              <Pressable onPress={() => updateQuantity(item.quantity + 1)}>
                <Icon name="add" type="material" color="#2C4E70" />
              </Pressable >
              <Pressable onPress={() => updateQuantity(0)}>
              <Icon name="delete" type="material" color="#2C4E70" />
              </Pressable>
            </View>
          </View> 
        </View>
      );
  };

  return (
    <SafeAreaProvider>
      <View
        style={{
          padding: 5,
          backgroundColor: "white",
          gap: 5,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: imageWidth * imageHeight * 0.002,
            color: "#2C4E70",
            fontWeight: "bold",
          }}
        >
          Book Store
        </Text>

        <View style={{ flexDirection: "row" }}>
          <Link href="/home" asChild>
            <Pressable
              style={{
                marginHorizontal: 5,
                borderWidth: 2,
                padding: 5,
                borderRadius: 10,
                backgroundColor: "white",
                borderColor: "#B3C8CF",
                width: 38,
                height: 38,
              }}
            >
              <Icon name="home" type="material" color="#2C4E70" />
            </Pressable>
          </Link>

          <Pressable
            onPress={() => {
              router.navigate(`/users/results`);
            }}
            style={{
              borderWidth: 2,
              padding: 5,
              borderRadius: 10,
              backgroundColor: "white",
              borderColor: "#B3C8CF",
              width: 38,
              height: 38,
            }}
          >
            <Icon name="search" type="material" color="#2C4E70" />
          </Pressable>
        </View>
      </View>
      <FlatList
        contentContainerStyle={styles.container}
        data={bookData}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={(item) => item.userId.toString()}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  section: {
    marginBottom: 20,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#2C4E70",
    marginBottom: 10,
  },
});
