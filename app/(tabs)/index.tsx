import React from 'react';
import { useWindowDimensions, View, Text, FlatList } from 'react-native';
import Item from '../../components/bookItem';

let book1 = { id: 1, name: "Magic Book 1", author: "Segara", category: "Fantasy" };
let book2 = { id: 2, name: "Magic Book 2", author: "Segara", category: "Fantasy" };

export default function index() {
    const { height, width, fontScale } = useWindowDimensions();

    const renderItem = ({item}) => (
        <Item item={item} />
    );

    return (
        <FlatList
            data={[book1, book2]}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            style={{alignSelf:'center'}}
        />
    );
}
