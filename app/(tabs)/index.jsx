import React from 'react';
import { useWindowDimensions, View, Text, StyleSheet, FlatList, Image, ScrollView } from 'react-native';
import Item from '../../components/bookItem';
import Icon from 'react-native-elements/dist/icons/Icon';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Category from '../../components/categoryItem';

let book1 = { id: 1, name: "Magic Book 1", author: "Segara", category: "Fantasy" };
let book2 = { id: 2, name: "Magic Book 2", author: "Segara", category: "Fantasy" };
let category1 = { id: 1, icon: "science", name: "scientific" };
let category2 = { id: 2, icon: "code", name: "coding" };


export default function index() {
    const { height, width, fontScale } = useWindowDimensions();

    const renderItem = ({ item }) => (
        <Item item={item} />
    );

    const categoryItem = ({ item }) => (
        <Category item={item} />
    );

    return (
        <SafeAreaProvider>
            <ScrollView>

            <View>
                <View>
                    <View style={{ flexDirection: "row", alignItems: "center" ,marginVertical:8}}>
                        <Text style={styles.recomendations}>New Releases</Text>
                        <Icon name='history' type="material" color="#2C4E70" style={{ marginLeft: 10, marginTop: 2 }} />
                        
                    </View>
                    <FlatList
                        data={[book1, book2]}
                        renderItem={renderItem}
                        horizontal={true}
                        keyExtractor={(item) => item.id.toString()}
                    />
                </View>
            </View>
            <View>
                <View style={{ flexDirection: "row", alignItems: "center" ,marginVertical:5}}>
                    <Text style={styles.recomendations}>Categories</Text>
                    <Icon name='book' type="material" color="#2C4E70" style={{ marginLeft: 10, marginTop: 4 }} />
                </View>
                <FlatList
                    data={[category1,category2]}
                    renderItem={categoryItem}
                    horizontal={true}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>

            <View>
                <FlatList
                    data={[book1, book2]}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>

            </ScrollView>
           

        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    recomendations: {
        fontWeight: "bold",
        fontSize: 20,
        marginLeft: 10,
        color: "#2C4E70"
    }
});
