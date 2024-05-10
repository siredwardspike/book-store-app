import React, { useState } from 'react';
import { View, Text, useWindowDimensions, Pressable, TextInput } from 'react-native';
import { Image } from 'react-native';
import Icon from 'react-native-elements/dist/icons/Icon';
import { Link, router } from 'expo-router';


export default function UsrItem({ item }) {
    const { height, width, fontScale } = useWindowDimensions();
    const [text, setText] = useState("approve")
    const [quantity, setQuantity] = useState(1)
    let imageWidth = width > 1200 ? width * 0.1 : width * 0.28;
    let imageHeight = height > 900 ? height * 0.1 : height * 0.2;

    return (
        <View style={{ flexDirection: "column", backgroundColor: "white", borderRadius: 20, alignSelf: 'center', alignItems: 'flex-start', width: width,padding:20}}>
            <View style={{flexDirection:'row',flex:1}}>
            <Pressable style={{ padding: 12}} onPress={() => { router.navigate(`/users/${item.id}`) }}>
            <View >
                <Image
                    source={{ uri: 'https://i.pinimg.com/564x/22/63/82/226382aa5680ba4c76a8c6697bbe4321.jpg' }}
                    style={{ width: imageWidth * imageHeight * 0.01, height: imageHeight * imageWidth * 0.015, borderRadius: 10 }}
                />   
            </View>
        </Pressable>

        <View style={{ flex: 1,alignContent:"center",alignItems:"center",padding:20}}>
                    
                    <View style={{ flex:1,alignItems: 'center', alignContent: "center",padding:2 }}>
                    <Text style={{ alignSelf:'flex-start',fontWeight: "bold", fontSize: imageHeight * imageWidth * 0.0015, color: '#2C4E70' }}>{item.name}</Text>
                    
                    <Text style={{ alignSelf:'flex-start',fontWeight: "400", fontSize: imageHeight * imageWidth * 0.001, color: '#2C4E70' }}>{item.category}</Text>
                    <Text style={{ alignSelf:'flex-start',fontWeight: "400", fontSize: imageHeight * imageWidth * 0.0009, color: '#2C4E70' }}>{item.price}$</Text>
                    <Text style={{ alignSelf:'flex-start',fontWeight: "400", fontSize: imageHeight * imageWidth * 0.0009, color: '#2C4E70' }}>
                    Presented in the form of a dialogue between Socrates and three different interlocutors, 
                    this classic text is an enquiry into the notion of a perfect community and the ideal 
                    individual within it. During the conversation, other questions are raised: what is 
                    {/* goodness?; what is reality?; and what is knowledge? The Republic also addresses the 
                    purpose of education and the role of both women and men as guardians of the people. 
                    With remarkable lucidity and deft use of allegory, Plato arrives at a depiction of a 
                    state bound by harmony and ruled by philosopher kings. */}
                    </Text>


                    </View>


                </View>

            </View>
           

        

        </View>
        

    );
}
    {/*<Pressable onPress={() => {text=="approve"? setText("approved"):null }} style={{  }}>
                            <Text style={{color:"#ccc",marginHorizontal:5,backgroundColor:"#33415c",padding:2,borderRadius:8}}>{text}</Text>
    </Pressable>*/}

   