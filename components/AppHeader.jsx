import { View, Text ,useWindowDimensions, Pressable, TextInput} from 'react-native'
import React from 'react'
import { Image } from 'react-native';

export default function AppHeader() {
    const {height,width,fontScale} = useWindowDimensions();

  return (
    <View style={{flexDirection:'row',padding:20,paddingBottom:10, backgroundColor:'#BED7DC',justifyContent:'space-between',gap:5}}>
            <View>
                <Text style={{fontSize:width>1200?fontScale*50:fontScale*20,color:'#E3FEF7'}}>BookStore</Text>
            </View>

            <View style={{flexDirection:'row',gap:10}}>
                <TextInput placeholder='Search for a book !' style={{borderRadius:50, backgroundColor:'white', borderWidth:2, width:width>1200?width*0.5:width*0.5,textAlign:'center'}}></TextInput>
                <Pressable>
                    <Image source={require('../assets/images/search.png')} style={{width:width>1200?width*0.03:width*0.1,height:height>900?height*0.03:height*0.05}}></Image>
                </Pressable>
            </View>

    </View>
  )
}