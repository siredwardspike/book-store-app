import React from 'react';
import { View, Text, useWindowDimensions, Pressable, TextInput } from 'react-native';
import { Image } from 'react-native';

export default function Item({ item }) {
    const { height, width, fontScale } = useWindowDimensions();

    const imageWidth = width > 1200 ? width * 0.2 : width * 0.28;
    const imageHeight = height > 900 ? height * 0.15 : height * 0.2;

    return (
        <View style={{marginHorizontal:12}}>
            <View style={{ flexDirection: "row", marginLeft: 1, marginTop: 5, backgroundColor: "#BED7DC", borderRadius: 20, padding: 10 }}>
                <Image
                    source={{ uri: 'https://i.pinimg.com/564x/22/63/82/226382aa5680ba4c76a8c6697bbe4321.jpg' }}
                    style={{ width: imageWidth, height: imageHeight, marginTop: 0, marginLeft: 20, borderRadius: 10 }}
                />
                <View style={{ flex: 1, marginLeft: 10 }}>
                    <Text style={{ fontSize: width > 1200 ? fontScale * 22 : fontScale * 22, marginTop: 20 }}>{item.name}</Text>
                    <Text style={{ fontSize: width > 1200 ? fontScale * 20 : fontScale * 18 }}>{item.author}</Text>
                    <Text style={{ fontSize: width > 1200 ? fontScale * 20 : fontScale * 18 }}>{item.category}</Text>
                    <Text style={{ fontSize: width > 1200 ? fontScale * 20 : fontScale * 18 }}>{item.price}</Text>
                    <Pressable onPress={() => { }} style={{ borderRadius: 10, backgroundColor: "#2C4E80", alignItems: "center", justifyContent: "center", width: 50, height: 30, marginTop: 5 }}>
                        <Text style={{ color: "white" }}>Add</Text>
                    </Pressable>
                </View>

            </View>
        </View>

    );
}
