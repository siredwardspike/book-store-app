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
import { login, resetPass } from "../../firebase/auth";
import { router } from "expo-router";

export default function SignIn() {
  const { height, width } = useWindowDimensions();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let imageWidth = width > 700 ? width * 0.5 : width;
  let imageHeight = height > 900 ? height * 0.08 : height * 0.2;
  
   const adminMail = "admin@bookstore.com";
   const adminPass = "admin123";
  
   const handleSignIn = async () => {
    if (adminMail == email && adminPass == password) {
      await AsyncStorage.setItem("adminEmail", adminMail);
      router.replace("/admin");
      return;
    }
    try {
      const cred = await login(email, password);
      await AsyncStorage.setItem("userUID", cred.user.uid);
      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", `${error}. Please try again.`);
      console.error("Sign-in error:", error);
    }
  };
  const handelResetPass = async () => {
    try {
      await resetPass(email);
      Alert.alert("Please check Your mail.");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          marginBottom: 20,
          width: "100%",
        }}
      >
        <TextInput
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          style={{
            paddingHorizontal: 15,
            paddingVertical: 10,
            backgroundColor: "white",
            borderRadius: 30,
            borderWidth: 2,
            borderColor: "#B3C8CF",
            fontSize: 16,
          }}
        />
      </View>

      <View
        style={{
          marginBottom: 20,
          width: "100%",
        }}
      >
        <TextInput
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          style={{
            paddingHorizontal: 15,
            paddingVertical: 10,
            backgroundColor: "white",
            borderRadius: 30,
            borderWidth: 2,
            borderColor: "#B3C8CF",
            fontSize: 16,
          }}
        />
      </View>

      <Pressable
        onPress={handleSignIn}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#82aab9" : "#4D869C",
            borderRadius: 30,
            paddingHorizontal: 20,
            paddingVertical: 10,
          },
        ]}
      >
        <Text
          style={{
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Sign In
        </Text>
      </Pressable>

      <Pressable onPress={handelResetPass}>
        <Text style={{ color: "#4D869C", fontSize: 14, marginTop: 10 }}>
          Forgot your password?
        </Text>
      </Pressable>

      <Pressable onPress={() => router.replace("/account/signup")}>
        <Text style={{ color: "#4D869C", fontSize: 14, marginTop: 10 }}>
          Don't have an account? Sign Up
        </Text>
      </Pressable>
    </View>
  );
}
