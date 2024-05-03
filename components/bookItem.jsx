import { View, Text, useWindowDimensions, Pressable, TextInput } from 'react-native'
import React from 'react'
import { Image } from 'react-native';


export default function Item(item) {
    const { height, width, fontScale } = useWindowDimensions();

    return (
        <View >
            <Image
                source={{ uri: 'https://i.pinimg.com/564x/22/63/82/226382aa5680ba4c76a8c6697bbe4321.jpg' }}
                style={{ width: 100, height: 100 }}
            />
            <Text style={{marginLeft:10}}>{item.name}</Text>
            <Text>{item.author}</Text>
            <Text>{item.category}</Text>
            <Text>{item.price}</Text>

        </View>
    )
}