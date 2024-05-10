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
} from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-elements/dist/icons/Icon";
import BookHeader from "../../components/bookHeader";
import { getBook } from "../../firebase/firestore_fun";
import { ActivityIndicator } from "react-native-web";

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
  
  useEffect(() => {
    fetchBook();
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
                    fontSize: imageHeight * imageWidth * 0.001,
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
                <Pressable onPress={() => {}} style={{ borderRadius: 10 }}>
                  <Icon
                    name="star"
                    type="material"
                    color={"#4D869C"}
                    size={imageHeight * imageWidth * 0.001}
                  />
                </Pressable>
                <Pressable onPress={() => {}} style={{ borderRadius: 10 }}>
                  <Icon
                    name="star"
                    type="material"
                    color={"#4D869C"}
                    size={imageHeight * imageWidth * 0.001}
                  />
                </Pressable>
                <Pressable onPress={() => {}} style={{ borderRadius: 10 }}>
                  <Icon
                    name="star"
                    type="material"
                    color={"#4D869C"}
                    size={imageHeight * imageWidth * 0.001}
                  />
                </Pressable>
                <Pressable onPress={() => {}} style={{ borderRadius: 10 }}>
                  <Icon
                    name="star"
                    type="material"
                    color={"#4D869C"}
                    size={imageHeight * imageWidth * 0.001}
                  />
                </Pressable>
                <Pressable onPress={() => {}} style={{ borderRadius: 10 }}>
                  <Icon
                    name="star"
                    type="material"
                    color={"#4D869C"}
                    size={imageHeight * imageWidth * 0.001}
                  />
                </Pressable>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignSelf: "center",
                  alignItems: "center",
                  gap: 20,
                }}
              >
                <Text
                  style={{
                    color: "#2C4E70",
                    fontWeight: "700",
                    alignSelf: "center",
                    fontSize: imageHeight * imageWidth * 0.0006,
                  }}
                >
                  4.5
                </Text>
                <Pressable onPress={()=>color=="#ccc"?setColor("red"):setColor("#ccc")}>
                  <Icon
                    name="favorite"
                    type="material"
                    color={color}
                    size={imageHeight * imageWidth * 0.0007}
                  />
                </Pressable>
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

                <Pressable>
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
