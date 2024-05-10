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
import Item from "../../components/bookItem";
import React, { useEffect, useState } from "react";
import Icon from "react-native-elements/dist/icons/Icon";
import { router, Link } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getBooks } from "../../firebase/firestore_fun";

export default function Results() {
  const renderItem = ({ item }) => <Item item={item} />;

  const { height, width, fontScale } = useWindowDimensions();
  const [books,setBooks]=useState();
  const [searchData, setsearchData] = useState();
  const [search, setSearch] = useState("");
<<<<<<< HEAD
  const [admin,setAdmin]=useState();
=======
  let imageWidth = width > 1200 ? width * 0.1 : width * 0.28;
  let imageHeight = height > 900 ? height * 0.08 : height * 0.2;
>>>>>>> 8756f081edf119e59eda3f271dd8b87791a92193

  const searchElement = (searchText) => {
    setSearch(searchText);

    if (searchText === "") {
      setsearchData(books);
    } else {
      const filteredData = books.filter((element) =>
        element.name.toLowerCase().includes(searchText)
      );
      setsearchData(filteredData);
    }
  };
  const fetchAdmin=async()=>{
    
    const tempAdmin = await AsyncStorage.getItem("adminEmail");
    if (tempAdmin) {
      setAdmin(tempAdmin);
    }
  }
  const fetchBooks=async()=>{
    const tempBooks=await getBooks();
    if(tempBooks){
      setBooks(tempBooks);
      setsearchData(tempBooks);
    }
  }
  useEffect(()=>{
    fetchAdmin();
    fetchBooks();
  },[])
  if(!admin){
    return<Text>Admin not define</Text>
  }
  return (
    <SafeAreaProvider>
      <View style={{ padding: 5, backgroundColor: "white", gap: 5 }}>
        <View>
          <Text
            style={{
              fontSize:  imageHeight * imageWidth * 0.002,
              color: "#2C4E70",
              fontWeight: "bold",
            }}
          >
            Book Store
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            gap: 15,
            justifyContent: "space-around",
          }}
        >
          <Link href="/admin" asChild>
            <Pressable
              style={{
                borderWidth: 2,
                padding: 5,
                borderRadius: 10,
                backgroundColor: "white",
                borderColor: "#B3C8CF",
              }}
            >
              <Icon name="arrow-back" type="material" color="#2C4E70" />
            </Pressable>
          </Link>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: 50,
              backgroundColor: "white",
              borderWidth: 2,
              width: width * 0.8,
              borderColor: "#B3C8CF",
              padding: 5,
            }}
          >
            <TextInput
              placeholder="Search for a book!"
              onChangeText={(t) => searchElement(t.toLowerCase())}
              style={{
                textAlign: "center",
                fontSize: imageHeight * imageWidth * 0.001,
                maxWidth: width * 0.6,
              }}
            ></TextInput>
            <Icon name="search" type="material" color="#B3C8CF" />
          </View>
        </View>
      </View>

      <FlatList
        contentContainerStyle={styles.container}
        data={search === "" ? books : searchData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
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
