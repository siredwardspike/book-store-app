import React, { useState } from 'react';
import { View, Text, useWindowDimensions, Pressable, TextInput } from 'react-native';
import { Image } from 'react-native';
import Icon from 'react-native-elements/dist/icons/Icon';
import { Link, router } from 'expo-router';


export default function UsrItem({ item }) {
    const { height, width, fontScale } = useWindowDimensions();

    let imageWidth = width > 1200 ? width * 0.2 : width * 0.28;
    let imageHeight = height > 900 ? height * 0.15 : height * 0.2;

    return (
        <Pressable style={{ marginHorizontal: 12 }} onPress={() => {router.navigate(`/users/${item.id}`)}}>
            <View style={{ flexDirection: "column", marginLeft: 1, marginTop: 5, backgroundColor: "white", borderRadius: 20, padding: 10,alignSelf:'center',alignItems:'center', width:width*0.4 }}>
                <Image
                    source={{ uri: 'https://i.pinimg.com/564x/22/63/82/226382aa5680ba4c76a8c6697bbe4321.jpg' }}
                    style={{ width: imageWidth*.9, height: imageHeight*.9, marginTop: 0, marginLeft: 2, borderRadius: 10 }}
                />
                <View style={{ flex: 1, marginLeft: 10 }}>
                    <Text style={{ fontSize: width > 1200 ? fontScale * 22 : fontScale * 22, marginTop: 7}}>{item.name}</Text>
                    <Text style={{ fontSize: width > 1200 ? fontScale * 22 : fontScale * 22}}>{item.category}</Text>
                    <Text style={{ fontSize: width > 1200 ? fontScale * 20 : fontScale * 18 }}>{item.price}$</Text>
                    <View style={{flexDirection:"row"}}> 
                        <Pressable onPress={() => { }} style={{ borderRadius: 10,  }}>
                            <Icon name='add' type="material" color="#2C4E70" />
                        </Pressable>
                        <Pressable onPress={() => { }} style={{ borderRadius: 10,  }}>
                            <Icon name='star' type="material" color= {"#2C4E70"} />
                        </Pressable>
                    </View>

                </View>

            </View>
        </Pressable>

    );
}