import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  TextInput,
  Alert,
} from "react-native";
import Icon from "react-native-elements/dist/icons/Icon";
import Item from "../../../components/bookItem";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { addBook, delet_BooK } from "../../../firebase/firestore_fun";

let color = "#ccc";
let books = [
  {
    id: 0,
    name: "Magic Book 1",
    author: "Segara",
    category: "scientific",
    imageUri:
      "https://i.pinimg.com/564x/22/63/82/226382aa5680ba4c76a8c6697bbe4321.jpg",
    price: "50$",
  },
  {
    id: 1,
    name: "Magic Book 2",
    author: "Segara",
    category: "Fantasy",
    imageUri:
      "https://i.pinimg.com/564x/22/63/82/226382aa5680ba4c76a8c6697bbe4321.jpg",
    price: "50$",
  },
  {
    id: 2,
    name: "Magic Book 3",
    author: "Segara",
    category: "coding",
    imageUri:
      "https://i.pinimg.com/564x/22/63/82/226382aa5680ba4c76a8c6697bbe4321.jpg",
    price: "50$",
  },
];

let categories = [
  { id: 0, icon: "book", name: "all books" },
  { id: 1, icon: "science", name: "scientific" },
  { id: 2, icon: "code", name: "coding" },
];

export default function AdminIndex() {
  const [categoryList, setCategoryList] = useState([...categories]);
  const [selectedCategory, setSelectedCategory] = useState("all books");
  const [newCategoryName, setNewCategoryName] = useState("");
  const [booksData, setBooksData] = useState([...books]);
  const [newBookName, setNewBookName] = useState("");
  const [newBookAuthor, setNewBookAuthor] = useState("");
  const [newBookCategory, setNewBookCategory] = useState("");
  const [newBookImageUri, setNewBookImageUri] = useState("");
  const [newBookPrice, setNewBookPrice] = useState("");

  const renderItem = ({ item }) => (
    <Item item={item} onDeleteBook={deleteBook} />
  );

  const categoryItem = ({ item }) => (
    <View style={styles.categoryItemContainer}>
      <Pressable
        style={[
          styles.categoryItem,
          selectedCategory === item.name && styles.selectedCategory,
        ]}
        onPress={() => {
          setSelectedCategory(item.name);
        }}
      >
        <Icon
          name={item.icon}
          type="material"
          color={selectedCategory === item.name ? "#fff" : "#2C4E70"}
        />
        <Text
          style={{
            fontWeight: "bold",
            color: selectedCategory === item.name ? "#fff" : "#2C4E70",
            marginLeft: 10, // Adjust the spacing between icon and text
          }}
        >
          {item.name}
        </Text>
      </Pressable>
      <Pressable
        onPress={() => deleteCategory(item.name)}
        style={styles.deleteCategoryButton}
      >
        <Icon name="delete" type="material" color="#FF6347" />
      </Pressable>
    </View>
  );

  const addNewCategory = () => {
    if (newCategoryName.trim() !== "") {
      const newCategory = {
        id: categoryList.length,
        icon: "add",
        name: newCategoryName,
      };
      setNewCategoryName("");
      setCategoryList((prevState) => [...prevState, newCategory]);
      setSelectedCategory(newCategory.name);
      Alert.alert("Success", "New category added!");
    } else {
      Alert.alert("Error", "Please enter a category name.");
    }
  };

  const addNewBook = async () => {
    if (
      newBookName.trim() === "" ||
      newBookAuthor.trim() === "" ||
      newBookCategory.trim() === "" ||
      newBookImageUri.trim() === "" ||
      newBookPrice.trim() === ""
    ) {
      Alert.alert(
        "Error",
        "Please enter book name, author, category, price, and image URI."
      );
      return;
    }

    if (newBookCategory === "all books") {
      Alert.alert("Error", "The book must have a specific category.");
      return;
    }

    const categoryExists = categoryList.some(
      (category) => category.name === newBookCategory
    );

    if (!categoryExists) {
      Alert.alert("Error", "Category does not exist.");
      return;
    }
try {
  
      const newBook = {
        id: booksData.length,
        name: newBookName,
        author: newBookAuthor,
        category: newBookCategory,
        price: newBookPrice,
        imageUri: newBookImageUri,
      };
      await addBook(newBook);
      setBooksData((prevBooks) => [...prevBooks, newBook]);
      setNewBookName("");
      setNewBookAuthor("");
      setNewBookCategory("");
      setNewBookPrice("");
      setNewBookImageUri("");
      Alert.alert("Success", "New book added.");
} catch (error) {
  console.error(error);
  Alert.alert("Error", "Failed to add new book.");
}
  };

  const deleteCategory = (name) => {
    console.log("Deleting category:", name); // Add this line for debugging
    Alert.alert(
      "Delete Category",
      `Are you sure you want to delete the category '${name}' and all its books?`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => {
            const updatedCategories = categoryList.filter(
              (category) => category.name !== name
            );
            const updatedBooks = booksData.filter(
              (book) => book.category !== name
            );
            setCategoryList(updatedCategories);
            setBooksData(updatedBooks);
            setSelectedCategory("all books");
          },
        },
      ]
    );
  };

  const deleteBook =  (id) => {
    Alert.alert("Delete Book", "Are you sure you want to delete this book?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Delete",
        onPress: async () => {
          await delet_BooK(booksData.filter((book) => book.id == id))
          const updatedBooks = booksData.filter((book) => book.id !== id);
          setBooksData(updatedBooks);
        },
      },
    ]);
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, styles.smallInput]}
            placeholder="New category name"
            value={newCategoryName}
            onChangeText={setNewCategoryName}
          />
          <Pressable style={styles.addButton} onPress={addNewCategory}>
            <Icon name="add" type="material" color="#2C4E70" />
            <Text style={styles.buttonText}>Add category</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, styles.smallInput]}
            placeholder="New book name"
            value={newBookName}
            onChangeText={setNewBookName}
          />
          <TextInput
            style={[styles.input, styles.smallInput]}
            placeholder="Author"
            value={newBookAuthor}
            onChangeText={setNewBookAuthor}
          />
          <TextInput
            style={[styles.input, styles.smallInput]}
            placeholder="Category"
            value={newBookCategory}
            onChangeText={setNewBookCategory}
          />
          <TextInput
            style={[styles.input, styles.smallInput]}
            placeholder="Price"
            value={newBookPrice}
            onChangeText={setNewBookPrice}
          />
          <TextInput
            style={[styles.input, styles.imageInput]}
            placeholder="Image URL"
            value={newBookImageUri}
            onChangeText={setNewBookImageUri}
          />
        </View>
        <Pressable style={styles.addButton} onPress={addNewBook}>
          <Icon name="add" type="material" color="#2C4E70" />
          <Text style={styles.buttonText}>Add book</Text>
        </Pressable>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Categories</Text>
        <FlatList
          data={categoryList}
          renderItem={categoryItem}
          horizontal={true}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>

      <FlatList
        contentContainerStyle={styles.flatListContainer}
        data={booksData.filter(
          (book) =>
            book.category === selectedCategory ||
            selectedCategory === "all books"
        )}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
  inputContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  input: {
    flexBasis: "48%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    marginTop: 5,
  },
  smallInput: {
    flexBasis: "48%",
    height: 40,
    marginBottom: 10,
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#B3C8CF",
  },
  buttonText: {
    marginLeft: 10,
    color: "#2C4E70",
  },
  section: {
    marginBottom: 20,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#2C4E70",
    marginBottom: 10,
    marginLeft: 20,
  },
  flatListContainer: {
    paddingHorizontal: 10,
  },
  categoryItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  categoryItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#BED7DC",
  },
  selectedCategory: {
    backgroundColor: "#ccc",
  },
  deleteCategoryButton: {
    marginLeft: 5,
  },
  imageInput: {
    flexBasis: "98%",
    height: 40,
    marginBottom: 10,
  },
});
