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
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
        style={{
          fontSize: height * 0.02,
          maxWidth: width * 0.8,
          borderRadius: 50,
          backgroundColor: "white",
          borderWidth: 2,
          borderColor: "#B3C8CF",
          padding: 5,
          marginBottom: 10,
        }}
      />
      <TextInput
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        style={{
          fontSize: height * 0.02,
          maxWidth: width * 0.8,
          borderRadius: 50,
          backgroundColor: "white",
          borderWidth: 2,
          borderColor: "#B3C8CF",
          padding: 5,
          marginBottom: 10,
        }}
      />
      <TextInput
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        style={{
          fontSize: height * 0.02,
          maxWidth: width * 0.8,
          borderRadius: 50,
          backgroundColor: "white",
          borderWidth: 2,
          borderColor: "#B3C8CF",
          padding: 5,
          marginBottom: 10,
        }}
      />
      <TextInput
        placeholder="Enter your profile url"
        value={profileUrl}
        onChangeText={setProfileUrl}
        style={{
          fontSize: height * 0.02,
          maxWidth: width * 0.8,
          borderRadius: 50,
          backgroundColor: "white",
          borderWidth: 2,
          borderColor: "#B3C8CF",
          padding: 5,
          marginBottom: 10,
        }}
      />
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
