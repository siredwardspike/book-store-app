import { router } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  useWindowDimensions,
} from "react-native";
import Icon from "react-native-elements/dist/icons/Icon";
import { register } from "../../firebase/auth";

export default function SignUp() {
  const { height, width } = useWindowDimensions();
  let imageWidth = width > 700 ? width * 0.5 : width ;
  let imageHeight = height > 900 ? height * 0.08 : height * 0.2;


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profileUrl, setProfileUrl] = useState("");

  const handleSignUp = async () => {
    try {
      const userInfo = { name, email, password, profileUrl };

      const cred = await register(
        userInfo.email,
        userInfo.password,
        userInfo.name,
        userInfo.profileUrl
      );

      router.replace("/account/signIn");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{flex:1,justifyContent:'center',alignSelf:'center',gap:20}}>
      <View style={{flexDirection:'row-reverse',justifyContent:'space-between',alignItems:'center',borderRadius: 50, 
      backgroundColor: 'white', borderWidth: 2, width: imageWidth *0.8, borderColor: '#B3C8CF',padding:5}}>
      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
        textAlign='center'
        style={{
          fontSize:imageHeight*imageWidth * 0.0003 , 
          maxWidth:width * 0.6 ,
          flex:1,
          textAlign:'left'
        }}
      />
      
      <Icon name='badge' type="material" color="#B3C8CF"/>
      </View>

        <View style={{flexDirection:'row-reverse',justifyContent:'space-between',alignItems:'center',borderRadius: 50, 
      backgroundColor: 'white', borderWidth: 2, width: imageWidth*0.8 , borderColor: '#B3C8CF',padding:5}}>
      <TextInput
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        textAlign='center'
        style={{
          fontSize: imageHeight*imageWidth * 0.0003 , 
          maxWidth:width * 0.6 ,
          flex:1,
          textAlign:'left'
        }}
      />
      
      <Icon name='mail' type="material" color="#B3C8CF"/>
      </View>
      
      <View style={{flexDirection:'row-reverse',justifyContent:'space-between',alignItems:'center',borderRadius: 50, 
      backgroundColor: 'white', borderWidth: 2, width: imageWidth*0.8, borderColor: '#B3C8CF',padding:5}}>
      <TextInput
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        textAlign='center'
        style={{
          fontSize: imageHeight*imageWidth * 0.0003 , 
          maxWidth:width * 0.6 ,
          flex:1,
          textAlign:'left'
        }}
      />
      
      <Icon name='lock' type="material" color="#B3C8CF"/>
      </View>

      <View style={{flexDirection:'row-reverse',justifyContent:'space-between',alignItems:'center',borderRadius: 50, 
      backgroundColor: 'white', borderWidth: 2, width: imageWidth*0.8, borderColor: '#B3C8CF',padding:5}}>
      <TextInput
        placeholder="Enter your profile link"
        value={profileUrl}
        onChangeText={setProfileUrl}
        textAlign='center'
        style={{
          fontSize:imageHeight*imageWidth * 0.0003 , 
          maxWidth:width * 0.6 ,
          flex:1,
          textAlign:'left'
        }}
      />
      
      <Icon name='image' type="material" color="#B3C8CF"/>
      </View>
      <Pressable onPress={handleSignUp}>
        <Text
          style={{
            textAlign: "center",
            borderWidth: 2,
            borderRadius: 50,
            borderColor: "#B3C8CF",
            backgroundColor: "white",
            padding: 5,
            fontWeight: "400",
            color: "#82aab9",
          }}
        >
          Sign Up
        </Text>
      </Pressable>

      <Pressable onPress={() => router.replace("/account/signIn")}>
        <Text style={{ color: "#4D869C", fontWeight: "200" }}>
          Already registerd?
        </Text>
      </Pressable>
    </View>
  );
}
