import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  useWindowDimensions,
} from "react-native";
import Item from "../../components/userBookItem";
import Icon from "react-native-elements/dist/icons/Icon";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { router, Link } from "expo-router";
import AppHeader from "../../components/AppHeader";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator } from "react-native-web";
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

// let categories = [
//   { id: 0, icon: "book", name: "All Books" },
//   { id: 1, icon: "science", name: "science" },
//   { id: 2, icon: "code", name: "coding" },
// ];

export default function Index() {
  const [categoryList, setCategoryList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all books");
  const [books, setBooks] = useState([]);
  const [admin, setAdmin] =useState();
  const { height, width } = useWindowDimensions();
  let imageWidth = width > 1200 ? width * 0.1 : width * 0.28;
  let imageHeight = height > 900 ? height * 0.08 : height * 0.2;

  const fetchBooks = () => {
    try {
      const booksRef = collection(db, "books");
      const unsubscribe = onSnapshot(booksRef, (snapshot) => {
        const updatedBooks = snapshot.docs.map((doc) => ({ ...doc.data() }));
        setBooks(updatedBooks.sort((a, b) => a.name.localeCompare(b.name)));
        setCategoryList(updatedBooks);
      });
      return () => unsubscribe();
    } catch (error) {
      console.error(error)
    }
  };

  const fetchCategories = () => {
    const categoryRef = collection(db, "categories");
    const unsubscribe = onSnapshot(categoryRef, (snapshot) => {
      const updatedCategories = snapshot.docs.map((doc) => ({ ...doc.data() }));
      setCategories(
        updatedCategories.sort((a, b) => a.name.localeCompare(b.name))
      ); // Sort categories by name
    });
    return unsubscribe;
  };

  
  useEffect(() => {
    fetchBooks();
    fetchCategories();
  }, []);
  if(!books){
    return (
      <ActivityIndicator />
    )
   }
  const renderItem = ({ item }) => <Item item={item} />;

  const categoryItem = ({ item }) => (
    <Pressable
      style={{
        backgroundColor: selectedCategory === item.name ? color : "#fff",
        borderRadius: 10,
      }}
      onPress={() => {
        setSelectedCategory(item.name);
        if (item.name === "all books") {
          setCategoryList(books);
        } else {
          let filteredData = books.filter(
            (element) =>
              element.category.toLowerCase() === item.name.toLowerCase()
          );
          setCategoryList(filteredData);
        }
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
