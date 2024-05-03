import React from 'react';
import { View, Text, useWindowDimensions, Pressable, TextInput } from 'react-native';
import { Image } from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
export default function Category({ item }) {
    return (
        <View style={{margin:5}}>
            <View style={{ marginHorizontal: 12 }}>
                <Icon name={item.icon} type="material" color="#2C4E70" style={{ marginTop: 7 }} ></Icon>
                <Text style={{fontWeight:"bold",color:"#2C4E70"}}>{item.name}</Text>
            </View>

        </View>

    );
}
