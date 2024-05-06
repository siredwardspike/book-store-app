import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import Item from '../../components/bookItem';
import Icon from 'react-native-elements/dist/icons/Icon';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { router, Link } from 'expo-router';

let color = "#ccc";

let books = [{ id: 0, name: "Magic Book", author: "Segara", category: "science", favorite: false }
    , { id: 1, name: "Magic Book", author: "Segara", category: "Fantasy", favorite: false },
{ id: 2, name: "Magic Book", author: "Segara", category: "coding", favorite: false }
]
let categories = [
    { id: 0, icon: "book", name: "All Books" }
    , { id: 1, icon: "science", name: "science" },
    { id: 2, icon: "code", name: "coding" }
]


export default function Index() {
    const [categoryList, setCategoryList] = useState(books);
    const [selectedCategory, setSelectedCategory] = useState("All books");

    //book item
    const renderItem = ({ item }) => (
        <Item item={item} />
    );

    const categoryItem = ({ item }) => (
        <Pressable
            style={{ margin: 5, backgroundColor: selectedCategory == item.name ? color : "#fff", borderRadius: 10 }}
            onPress={() => {
                setSelectedCategory(item.name);
                let filteredData = books.filter(element => element.category === item.name);
                setCategoryList(filteredData.length > 0 ? filteredData : books);
            }}
        >

            <View style={{ marginHorizontal: 12 }}>
                <Icon name={item.icon} type="material" color="#2C4E70" style={{ marginTop: 7 }} />
                <Text style={{ fontWeight: "bold", color: "#2C4E70" }}>{item.name}</Text>
            </View>
        </Pressable>
    );


    return (
        <SafeAreaProvider>
            <FlatList
                contentContainerStyle={styles.container}
                data={[
                    { key: 'New Releases', data: books, icon: "history" },
                    { key: 'Categories', data: categories },
                    { key: '', data: categoryList },
                ]}
                renderItem={({ item }) => (
                    <View style={styles.section}>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={styles.heading}>{item.key}</Text>
                            <Icon name={item.icon} type="material" color="#2C4E70" style={{ margin: 3 }} />
                        </View>

                        <FlatList
                            contentContainerStyle={styles.container}
                            data={item.data}
                            renderItem={item.key === 'Categories' ? categoryItem : renderItem}
                            horizontal={item.key !== ''}
                            keyExtractor={(item) => item.id.toString()}
                            numColumns={item.key === '' ? 2 : 0}
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
        padding: 10

    },
    section: {
        marginBottom: 20,
    },
    heading: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#2C4E70",
        marginBottom: 10,
    }
});
