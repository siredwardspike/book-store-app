import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  useWindowDimensions,
} from "react-native";
import Item from "../../../components/userBookItem";
import Icon from "react-native-elements/dist/icons/Icon";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { router, Link } from "expo-router";
import AppHeader from "../../../components/AppHeader";
import { collection,onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase/config";
let color = "#ccc";

// let books = [
//   {
//     id: 0,
//     name: "book1",
//     author: "Segara",
//     category: "science",
//     price: 120,
//     favorite: false,
//   },
//   {
//     id: 1,
//     name: "book2",
//     author: "Segara",
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

let categories = [
  { id: 0, icon: "book", name: "All Books" },
  { id: 1, icon: "science", name: "science" },
  { id: 2, icon: "code", name: "coding" },
];

export default function Index() {
  const [categoryList, setCategoryList] = useState();
  const [selectedCategory, setSelectedCategory] = useState("All books");
  const [books,setBooks]=useState();
  const { height, width, fontScale } = useWindowDimensions();
  let imageWidth = width > 1200 ? width * 0.1 : width * 0.28;
  let imageHeight = height > 900 ? height * 0.08 : height * 0.2;
  
  const fetchBooks = ()=>{
    const booksRef = collection(db,"books");
    const unsubscribe = onSnapshot(booksRef, (snapshot) => {
        const updatedBooks = snapshot.docs.map((doc) => ({...doc.data() }));
        setBooks(updatedBooks.sort((a, b) => b.name - a.name));
        setCategoryList(books);
      });
      
      return () => unsubscribe();
  }
  useEffect(()=>{
    fetchBooks();
  },[]);
  //book item
  const renderItem = ({ item }) => <Item item={item} />;

  const categoryItem = ({ item }) => (
    <Pressable
      style={{
        backgroundColor: selectedCategory == item.name ? color : "#fff",
        borderRadius: 10,
      }}
      onPress={() => {
        setSelectedCategory(item.name);
        let filteredData = books.filter(
          (element) => element.category === item.name
        );
        setCategoryList(filteredData.length > 0 ? filteredData : books);
      }}
    >
      <View style={{ paddingHorizontal: 20 }}>
        <Icon name={item.icon} type="material" color="#2C4E70" />
        <Text style={{ fontWeight: "bold", color: "#2C4E70" }}>
          {item.name}
        </Text>
      </View>
    </Pressable>
  );

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <AppHeader></AppHeader>
      <FlatList
        contentContainerStyle={styles.container}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={[
          { key: "New Releases", data: books, icon: "history" },
          { key: "Categories", data: categories },
          { key: "", data: categoryList },
        ]}
        renderItem={({ item }) => (
          <View style={styles.section}>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: imageHeight * imageWidth * 0.0015,
                  color: "#2C4E70",
                }}
              >
                {item.key}
              </Text>
              <Icon
                name={item.icon}
                type="material"
                color="#2C4E70"
                style={{ margin: 8 }}
              />
            </View>

            <FlatList
              contentContainerStyle={styles.container}
              data={item.data}
              renderItem={item.key === "Categories" ? categoryItem : renderItem}
              horizontal={item.key !== ""}
              keyExtractor={(item) => item.id.toString()}
              numColumns={item.key === "" ? 2 : 0}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
            />
          </View>
        )}
        keyExtractor={(item) => item.key}
      />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  section: {},
  heading: {},
});
