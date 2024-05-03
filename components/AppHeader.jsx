import { View, Text ,useWindowDimensions, Pressable, TextInput} from 'react-native'
import React from 'react'
import { Image } from 'react-native';

export default function AppHeader() {
    const {height,width,fontScale} = useWindowDimensions();

  return (
    <View style={{flexDirection:'row',padding:10,paddingBottom:10, backgroundColor:'#BED7DC',justifyContent:'space-around',gap:5,alignItems:'center'}}>
            <View>
                <Text style={{fontSize:width>1200?fontScale*50:fontScale*20,color:'#E3FEF7',fontWeight:'bold'}}>BookStore</Text>
            </View>

            <View style={{flexDirection:'row',gap:10}}>
                <TextInput placeholder='Search for a book !' style={{borderRadius:50, backgroundColor:'white', borderWidth:2, width:width>1200?width*0.8:width*0.5,textAlign:'center'}}></TextInput>
                <Pressable style={{borderWidth:2,padding:5,borderRadius:10,backgroundColor:'white'}}>
                    <Image source={require('../assets/images/search.png')} style={{width:width>1200?width*0.03:width*0.1,height:height>900?height*0.05:height*0.05}}></Image>
                </Pressable>
            </View>

    </View>
  )
}