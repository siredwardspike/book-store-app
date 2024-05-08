import { router, useLocalSearchParams, Link, Tabs } from 'expo-router';
import { View, Text, Image, StyleSheet, useWindowDimensions, Pressable, ScrollView, FlatList } from 'react-native'
import React from 'react'
import Icon from 'react-native-elements/dist/icons/Icon';
import BookHeader from '../../components/bookHeader';

let books = [{ id: 0, name: "book1", author: "Segara", category: "science",price:120,favorite:false }
    , { id: 1, name: "book2", author: "Segara", category: "Fantasy",price:15,favorite:false  },
{ id: 2, name: "book3", author: "Segara", category: "coding" ,price:25,favorite:false }
]


export default function Book() {
    const { id } = useLocalSearchParams();
    const { height, width, fontScale } = useWindowDimensions();
    let imageWidth = width > 1200 ? width * 0.2 : width * 0.28;
    let imageHeight = height > 900 ? height * 0.15 : height * 0.2;


    return (

        <ScrollView style={{ flex: 1, alignContent: 'flex-start', backgroundColor: 'white' }}>
            <BookHeader></BookHeader>

            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                <View style={{ alignItems: 'center', padding: 10, gap: 5 }}>


                    <View style={{ borderRadius: 10, padding: 10, alignItems: 'center', marginBottom: 20, borderWidth: 0, borderBottomColor: '#CDE8E5', borderTopColor: '#EEF7FF', borderLeftColor: '#EEF7FF', borderRightColor: '#EEF7FF', borderCurve: -4 }}>

                        <Image source={{ uri: 'https://i.pinimg.com/564x/22/63/82/226382aa5680ba4c76a8c6697bbe4321.jpg' }}
                            style={{ width: imageWidth * 1.9, height: imageHeight * 2, marginTop: 0, marginLeft: 2, borderRadius: 10 }}></Image>

                        <View style={{ flexDirection: "column", alignContent: "center", alignItems: "center" }}>
                            <Text style={{ color: "#2C4E70", fontWeight: "bold", fontSize: width > 1200 ? fontScale * 20 : fontScale * 25, borderRadius: 10, marginRight: 10 }}>
                                {books[id].name}
                            </Text>
                            <Text style={{ color: "#2C4E70", fontWeight: "bold", marginBottom: 7, fontSize: width > 1200 ? fontScale * 20 : fontScale * 15 }}>{books[id].author} </Text>

                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: "#2C4E70", fontWeight: "bold", fontSize: width > 1200 ? fontScale * 20 : fontScale * 20, borderRadius: 10, marginRight: 10 }}>
                                {books[id].price}$

                            </Text>

                            <Pressable onPress={() => { }} style={{ borderRadius: 10 }}>
                                <Icon name='add' type="material" color="#2C4E70" style={{ marginRight: 5, borderRadius: 9, borderColor: "#2C4E70", borderWidth: 3 }} />
                            </Pressable>

                            <Pressable onPress={() => { }} style={{ borderRadius: 10, }}>
                                <Icon name='star' type="material" color={"#2C4E70"} style={{ marginTop: 2, borderRadius: 9, borderColor: "#2C4E70", }} />
                            </Pressable>
                        </View>

                    </View>
                    <View style={{ flexDirection: 'column', alignContent: "center", alignItems: "center" }}>
                        <Text style={{ color: "#2C4E70", fontWeight: "bold", fontSize: width > 1200 ? fontScale * 20 : fontScale * 15 }}>discription</Text>
                    </View>
                </View>


            </View>
           

        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10

    },
    section: {
        marginBottom: 20,
    },
    heading: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#2C4E70",
        marginHorizontal: 10,
       borderColor:"#ccc"
       ,borderRadius:"20" 
    }
});
