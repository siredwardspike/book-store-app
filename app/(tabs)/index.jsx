import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList ,Pressable} from 'react-native';
import Item from '../../components/bookItem';
import Icon from 'react-native-elements/dist/icons/Icon';
import { SafeAreaProvider } from 'react-native-safe-area-context';

let color = "#ccc";
let books = [{ id: 1, name: "Magic Book 1", author: "Segara", category: "scientific" }
    , { id: 2, name: "Magic Book 2", author: "Segara", category: "Fantasy" },
{ id: 3, name: "Magic Book 3", author: "Segara", category: "coding" }
]
let categories = [
    {id:0, icon:"book",name:"all books"}
    ,{ id: 1, icon: "science", name: "scientific" },
{ id: 2, icon: "code", name: "coding" }
]


export default function Index() {
    const [categoryList, setCategoryList] = useState(books);
    const [selectedCategory,setSelectedCategory] = useState(null);
    const renderItem = ({ item }) => (
        <Item item={item} />
    );

    const categoryItem = ({ item }) => (
        <Pressable
        style={{ margin: 5 ,backgroundColor: selectedCategory == item.name ? color : "#fff",borderRadius:10}}
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
                    { key: 'New Releases', data: books },
                    { key: 'Categories', data: categories },
                    { key: 'All Books', data: categoryList },
                ]}
                renderItem={({ item }) => (
                    <View style={styles.section}>
                        <Text style={styles.heading}>{item.key}</Text>
                        <FlatList
                            data={item.data}
                            renderItem={item.key === 'Categories' ? categoryItem : renderItem}
                            horizontal={item.key !== 'All Books'}
                            keyExtractor={(item) => item.id.toString()}
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
    }
});
