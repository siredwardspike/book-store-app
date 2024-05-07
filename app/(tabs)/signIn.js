import { View, Text ,Image,useWindowDimensions, Pressable ,TextInput} from 'react-native'
import React from 'react'
import Icon from 'react-native-elements/dist/icons/Icon';


export default function signIn() {
    const { height, width, fontScale } = useWindowDimensions();

  return (
    <View style={{flex:1,justifyContent:'center',alignSelf:'center',gap:20}}>

       <View style={{flexDirection:'row-reverse',justifyContent:'space-between',alignItems:'center',borderRadius: 50, backgroundColor: 'white', borderWidth: 2, width: width * 0.8, borderColor: '#B3C8CF',padding:5}}>
            <TextInput placeholder='Enter your email' textAlign='center'
              style={{fontSize: height * 0.02 , maxWidth:width * 0.6 ,flex:1,textAlign:'left'}}></TextInput>
              <Icon name='mail' type="material" color="#B3C8CF"/>
          </View>

          <View style={{flexDirection:'row-reverse',justifyContent:'space-between',alignItems:'center',borderRadius: 50, backgroundColor: 'white', borderWidth: 2, width: width * 0.8, borderColor: '#B3C8CF',padding:5}}>
            <TextInput placeholder='Enter your password' textAlign='center' secureTextEntry={true}
              style={{fontSize: height * 0.02 , maxWidth:width * 0.6 ,flex:1,textAlign:'left'}}></TextInput>
              <Icon name='pin' type="material" color="#B3C8CF"/>
          </View>

        <View style={{alignSelf:'center', fontSize:height*0.02}}>

            <Pressable >
                <Text style={{textAlign:'center',borderWidth:2, borderRadius:50, borderColor: '#B3C8CF', backgroundColor: 'white',padding:5, fontWeight:'500',color:"#4D869C"}}>Sign in</Text>
            </Pressable>

            <Pressable>
                <Text style={{color:"#4D869C", fontWeight:'200'}}>Forgot your password?</Text>
            </Pressable>

        </View>
        

        
    </View>
  )
}