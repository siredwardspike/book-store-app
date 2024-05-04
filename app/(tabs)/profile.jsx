import { View, Text ,Image,useWindowDimensions, Pressable} from 'react-native'
import React from 'react'

export default function profile() {
    const {height, width,fontScale} = useWindowDimensions();

  return (
    <View style={{flex:1,backgroundColor:'#B3C8CF',justifyContent:'center'}}> 
      <View style={{flexDirection:'column',alignSelf:'center'}}>
        <Image source={{uri:'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRaT2WozXdM9ChvdlD38Wp0--s6sgOqG4lbgwvrO5Ou16gUzNsE'}} 
        style={{height:height>1200?height*0.5:height*0.3,width:width*0.3, borderRadius:100, aspectRatio:1, borderWidth:fontScale*5, borderColor:'#BED7DC'}}></Image>
    <View style={{alignItems:'center'}}>
        <Text style={{fontSize:fontScale*20 , fontWeight:'bold' ,color:'black'}}>User Name: The Rock</Text>

        <Pressable> 
             <Text style={{fontSize:fontScale*20 , fontWeight:'100' ,color:'black'}}>Sign Out</Text>
        </Pressable>
    </View>
   
     
    </View>

    </View>
  
  )
}