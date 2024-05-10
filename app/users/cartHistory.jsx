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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getCarts } from "../../firebase/firestore_fun";



export default function profile() {
  const { height, width, fontScale } = useWindowDimensions();
  let imageWidth = width > 1200 ? width * 0.1 : width * 0.28;
  let imageHeight = height > 900 ? height * 0.15 : height * 0.2;
  const [bookData, setBookData] = useState();

  const fetchBooksinCart = async () => {
    try {
      const uid = await AsyncStorage.getItem("userUID");
      
      const _bookData = await getCarts(uid);
      setBookData(_bookData);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchBooksinCart();
  }, []);
  const renderItem = ({ item, index }) => {
    const updateQuantity = (newQuantity) => {
      const updatedBooks = [...bookData];
      updatedBooks[index].quantity = newQuantity;
      setBookData(updatedBooks);
    };
    return (
      <View style={{ alignContent: "center", alignItems: "center" }}>
        <Item item={item} />
        <View style={{ flexDirection: "row", gap: 15 }}>
       
          
         
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
          <Link href="/users/profile" asChild>
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
              <Icon name="account-circle" type="material" color="#2C4E70" />
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
