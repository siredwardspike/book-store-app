import React, { useState } from 'react';
import { View, Text, useWindowDimensions, Pressable, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';

export default function Category({ item }) {
    const [pressed, setPressed] = useState(false);

    const check = () => {
        setPressed(!pressed);
    };

    return (
        <Pressable
            style={{ margin: 5, opacity: pressed ? 0.5 : 1 }}
            onPress={check}
        >
            <View style={{ marginHorizontal: 12 }}>
                <Icon name={item.icon} type="material" color="#2C4E70" style={{ marginTop: 7 }} />
                <Text style={{ fontWeight: "bold", color: "#2C4E70" }}>{item.name}</Text>
            </View>
        </Pressable>
    );
}
