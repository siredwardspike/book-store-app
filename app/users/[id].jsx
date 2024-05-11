import { router, useLocalSearchParams, Link, Tabs } from "expo-router";
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  Pressable,
  ScrollView,
  FlatList,
  Alert,
  TextInput
} from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-elements/dist/icons/Icon";
import BookHeader from "../../components/bookHeader";
import { addToCart, calcRate, getBook, getRate } from "../../firebase/firestore_fun";
import { ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";


// let books = [
//   {
//     id: 0,
//     name: "Book1",
//     author: "Segara",
//     category: "science",
//     price: 120,
//     favorite: false,
//   },
//   {
//     id: 1,
//     name: "Hegemony or Survival? : America's Quest for Global Dominance ",
//     author: "Noam Chomsky",
//     category: "Fantasy",
//     price: 15,
//     favorite: false,
//   },
//   {
//     id: 2,
//     name: "book3",
//     author: "Segara",
//     category: "coding",
//     price: 25,
//     favorite: false,
//   },
// ];

export default function Book() {
  const { id } = useLocalSearchParams();
  const [book, setBook] = useState();
  const [rate,setRate] = useState();
  const { height, width, fontScale } = useWindowDimensions();
  let imageWidth = width > 1200 ? width * 0.1 : width * 0.28;
  let imageHeight = height > 900 ? height * 0.15 : height * 0.2;
 const [color,setColor]=useState("#ccc")
  const fetchBook=async()=>{
   try {
    const Book=await getBook(id);
    setBook(Book);
   } catch (error) {
    console.error(error);
   }
  }
  // const fetchRate = async(id)=>{
  //   try {
  //     const tempRate = await getRate(id);
  //     if (tempRate) {
  //       setRate(tempRate);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  const handelAddToCart=async()=>{
    try{
      const uid = await AsyncStorage.getItem("userUID");
      await addToCart(uid,book);
    }catch (error){
      Alert.alert(error);
    }
  }
  useEffect(() => {
    fetchBook();
    // fetchRate();
  }, []);

 if(!book){
    return <ActivityIndicator />
 }
 
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "white" }}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      <BookHeader></BookHeader>

      <View style={{ flex: 1, flexDirection: "column" }}>
        <View style={{ padding: 10, flexDirection: "colmun" }}>
          <View style={{ alignItems: "center", gap: 10 }}>
            <Image
              source={{
                uri: book.image,
              }}
              style={{
                width: imageWidth * imageHeight * 0.01,
                height: imageHeight * imageWidth * 0.015,
                borderRadius: 10,
              }}
            ></Image>

            <View>
              <View style={{ alignItems: "center" }}>
                <Text
                  style={{
                    color: "#2C4E70",
                    fontWeight: "500",
                    fontSize: imageHeight * imageWidth * 0.0015,
                    padding: 20,
                  }}
                >
                  {book.name}
                </Text>

                <Text
                  style={{
                    color: "#2C4E70",
                    fontWeight: "300",
                    fontSize: imageHeight * imageWidth * 0.0012,
                  }}
                >
                  {book.author}{" "}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  alignSelf: "center",
                }}
              >
                <Text>
                {book.rate}%
                </Text>
                <TextInput
                inputMode={"numeric"}
                maxLength={2}
                placeholderTextColor={'grey'}
                placeholder="99"
                onChangeText={setRate}
                
                onSubmitEditing={async()=>{
                  console.log("value is:",rate)
                  await calcRate(book.id,rate);
                  fetchBook();
                }
                  
                }
                style={{
                  color: "#2C4E70",
                  fontWeight: "700",
                  alignSelf: "center",
                  fontSize: imageHeight * imageWidth * 0.0012,
                }}>
                </TextInput>
              </View>

              
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 30,
              }}
            >
              <View
                style={{
                  backgroundColor: "#2C4E70",
                  borderRadius: 10,
                  flexDirection: "row",
                  paddingHorizontal: 30,
                  gap: 20,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: imageHeight * imageWidth * 0.001,
                  }}
                >
                  {book.price}
                </Text>

                <Pressable onPress={handelAddToCart}>
                  <Icon
                    name="add"
                    type="material"
                    color="white"
                    size={imageHeight * imageWidth * 0.001}
                  />
                </Pressable>
              </View>
            </View>

            <View
              style={{
                flexDirection: "column",
                alignContent: "center",
                alignItems: "center",
                padding: 20,
              }}
            >
              <Text
                style={{
                  color: "#2C4E70",
                  fontWeight: "bold",
                  fontSize: imageHeight * imageWidth * 0.0007,
                }}
              >
                {book.des}
                {/* Reading Chomsky today is sobering and instructive . . . He is a
                global phenomenon . . . perhaps the most widely read voice on
                foreign policy on the planet." - The New York Times Book Review
                An immediate national bestseller, Hegemony or Survival
                demonstrates how, for more than half a century the United States
                has been pursuing a grand imperial strategy with the aim of
                staking out the globe.{" "} */}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  section: {
    marginBottom: 20,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#2C4E70",
    marginHorizontal: 10,
    borderColor: "#ccc",
    borderRadius: "20",
  },
});
