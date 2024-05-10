import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  Text,
  useWindowDimensions,
  Pressable,
  TextInput,
  Alert,
} from "react-native";
import Icon from "react-native-elements/dist/icons/Icon";
import { signInWithEmailAndPassword } from "firebase/auth"; 
import { login } from "../../firebase/auth";
import { router } from "expo-router";

export default function SignIn() {
  const { height, width, fontScale } = useWindowDimensions();
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 

  const handleSignIn = async () => {
    try {
      const cred = await login(email, password);
      await AsyncStorage.setItem("userUID", cred.user.uid);
    } catch (error) {
  
      Alert.alert("Error", "Invalid email or password. Please try again.");
      console.error("Sign-in error:", error);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignSelf: "center",
        gap: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row-reverse",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: 50,
          backgroundColor: "white",
          borderWidth: 2,
          width: width * 0.8,
          borderColor: "#B3C8CF",
          padding: 5,
        }}
      >
        <TextInput
          placeholder="Enter your email"
          textAlign="center"
          style={{
            fontSize: height * 0.02,
            maxWidth: width * 0.6,
            flex: 1,
            textAlign: "left",
          }}
          value={email}
          onChangeText={setEmail}
        />
        <Icon name="mail" type="material" color="#B3C8CF" />
      </View>
      <View
        style={{
          flexDirection: "row-reverse",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: 50,
          backgroundColor: "white",
          borderWidth: 2,
          width: width * 0.8,
          borderColor: "#B3C8CF",
          padding: 5,
        }}
      >
        <TextInput
          placeholder="Enter your password"
          textAlign="center"
          secureTextEntry={true}
          style={{
            fontSize: height * 0.02,
            maxWidth: width * 0.6,
            flex: 1,
            textAlign: "left",
          }}
          value={password}
          onChangeText={setPassword}
        />
        <Icon name="pin" type="material" color="#B3C8CF" />
      </View>
      <View style={{ alignSelf: "center", fontSize: height * 0.02 }}>
        <Pressable onPress={handleSignIn}>
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
            Sign in
          </Text>
        </Pressable>
        <Pressable>
          <Text style={{ color: "#4D869C", fontWeight: "200" }}>
            Forgot your password ?
          </Text>
        </Pressable>
        <Pressable onPress={() => router.replace("/account/signup")}>
          <Text style={{ color: "#4D869C", fontWeight: "200", padding: 8 }}>
            Don't have account ?
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
