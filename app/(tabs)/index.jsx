import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Item from '../../components/bookItem';
import Icon from 'react-native-elements/dist/icons/Icon';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Category from '../../components/categoryItem';

let book1 = { id: 1, name: "Magic Book 1", author: "Segara", category: "Fantasy" };
let book2 = { id: 2, name: "Magic Book 2", author: "Segara", category: "Fantasy" };
let book3 = { id: 3, name: "Magic Book 3", author: "Segara", category: "Fantasy" };
let category1 = { id: 1, icon: "science", name: "scientific" };
let category2 = { id: 2, icon: "code", name: "coding" };

export default function Index() {
    const renderItem = ({ item }) => (
        <Item item={item} />
    );

    const categoryItem = ({ item }) => (
        <Category item={item} />
    );

    return (
        <SafeAreaProvider>
            <FlatList
                contentContainerStyle={styles.container}
                data={[
                    { key: 'New Releases', data: [book1, book2, book3] },
                    { key: 'Categories', data: [category1, category2] },
                    { key: 'All Books', data: [book1, book2, book3] },
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
