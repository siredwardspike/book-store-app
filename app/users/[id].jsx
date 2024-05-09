import { router, useLocalSearchParams, Link, Tabs } from 'expo-router';
import { View, Text, Image, StyleSheet, useWindowDimensions, Pressable, ScrollView, FlatList } from 'react-native'
import React from 'react'
import Icon from 'react-native-elements/dist/icons/Icon';
import BookHeader from '../../components/bookHeader';

let books = [{ id: 0, name: "Book1", author: "Segara", category: "science",price:120,favorite:false }
    , { id: 1, name: "Book2", author: "Segara", category: "Fantasy",price:15,favorite:false  },
{ id: 2, name: "book3", author: "Segara", category: "coding" ,price:25,favorite:false }
]


export default function Book() {
    const { id } = useLocalSearchParams();
    const { height, width, fontScale } = useWindowDimensions();
    let imageWidth = width > 1200 ? width * 0.1 : width * 0.28;
    let imageHeight = height > 900 ? height * 0.15 : height * 0.2;


    return (

        <ScrollView style={{ flex: 1, backgroundColor: 'white' }} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
            <BookHeader></BookHeader>
            

            <View style={{ flex:1,flexDirection:'column'}}>
                <View style={{ padding: 10, gap: 5 ,flexDirection:'colmun'}}>


                    <View style={{  alignItems: 'center',gap:10}}>

                        <Image source={{ uri: 'https://i.pinimg.com/564x/22/63/82/226382aa5680ba4c76a8c6697bbe4321.jpg' }}
                            style={{  width: imageWidth*imageHeight*0.01,height: imageHeight*imageWidth*0.015}}></Image>

                            


                    <View >
                        
                        <Text style={{ color: "#2C4E70", fontWeight: "500", fontSize: imageHeight*imageWidth*0.002}}>
                            {books[id].name}
                        </Text>
                        

                        <Text style={{ color: "#2C4E70", fontWeight: "300", fontSize:imageHeight*imageWidth*0.0012}}>by {books[id].author} </Text>

                       

                        
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Pressable onPress={() => { }} style={{ borderRadius: 10, }}>
                                <Icon name='star' type="material" color={"#4D869C"} />
                            </Pressable>
                            <Pressable onPress={() => { }} style={{ borderRadius: 10, }}>
                                <Icon name='star' type="material" color={"#4D869C"}  />
                            </Pressable>
                            <Pressable onPress={() => { }} style={{ borderRadius: 10, }}>
                                <Icon name='star' type="material" color={"#4D869C"}  />
                            </Pressable>
                            <Pressable onPress={() => { }} style={{ borderRadius: 10, }}>
                                <Icon name='star' type="material" color={"#4D869C"}  />
                            </Pressable>
                            <Pressable onPress={() => { }} style={{ borderRadius: 10, }}>
                                <Icon name='star' type="material" color={"#4D869C"}/>
                            </Pressable>

                            <Text style={{color:"#2C4E70",fontWeight:"700"}}>
                                4.5
                        </Text>
                           
                        </View>
                       

                       
                </View>

                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center', gap:30}}>

                        <View style={{backgroundColor:'#2C4E70',padding:5 ,borderRadius:10,flexDirection:'row',paddingHorizontal:30}}>
                            <Text style={{ color: "white", fontWeight: "bold", fontSize: imageHeight*imageWidth*0.0015}}>
                                {books[id].price}$
                            </Text>
                            
                            <Icon name='add' type="material" color="white" style={{ borderRadius: 9, borderColor: "#2C4E70", borderWidth: 3 }} />

                        </View>

                        <Pressable>
                        <Icon name='favorite' type="material" color="#2C4E70"  />

                        </Pressable>

                </View>

                <View style={{ flexDirection: 'column', alignContent: "center", alignItems: "center"  }}>
                            <Text style={{ color: "#2C4E70", fontWeight: "bold", fontSize:imageHeight*imageWidth*0.0009}}>Reading Chomsky today is sobering and instructive . . .
                             He is a global phenomenon . . . perhaps the most widely read voice on foreign policy on the planet." -
                             The New York Times Book Review An immediate national bestseller, Hegemony or Survival demonstrates how, 
                             for more than half a century the United States has been pursuing a grand imperial strategy with the aim of staking out the globe. </Text>
                </View>
                        
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
