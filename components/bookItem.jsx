import React from 'react';
import { View, Text, useWindowDimensions, Pressable, TextInput } from 'react-native';
import { Image } from 'react-native';

export default function Item({ item }) {
    const { height, width, fontScale } = useWindowDimensions();

    return (
        <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 10, backgroundColor: "#BED7DC", borderRadius: 20, width: 350, height: 150 }}>
            <Image
                source={{ uri: 'https://i.pinimg.com/564x/22/63/82/226382aa5680ba4c76a8c6697bbe4321.jpg' }}
                style={{ width: 100, height: 120, marginTop: 15, marginLeft: 20 }}
            />
            <View>
                <Text style={{ marginLeft: 10, marginTop: 30 }}>{item.name}</Text>
                <Text style={{ marginLeft: 10 }}>{item.author}</Text>
                <Text style={{ marginLeft: 10 }}>{item.category}</Text>
                <Text style={{ marginLeft: 10 }}>{item.price}</Text>

            </View>
            <Pressable onPress={() => { }} style={{ borderRadius: 10, marginLeft: 10, backgroundColor: "#2C4E80", alignItems: "center", justifyContent: "center", marginTop: 10, width: 50,height:20,marginTop:60 }}>
                <Text style={{ color: "white" }}>add</Text>
            </Pressable>
        </View>
    );
}

