import { View,Pressable,Text } from "react-native";
import Icon from "react-native-elements/dist/icons/Icon";
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
  export {categoryItem};