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
  let imageWidth = width > 700 ? width * 0.5 : width;
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
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        gap: 20,
      }}
    >
      <View style={{ width: "100%" }}>
        <View
          style={{
            flexDirection: "row-reverse",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: 50,
            backgroundColor: "white",
            borderWidth: 2,
            borderColor: "#B3C8CF",
            padding: 12,
          }}
        >
          <TextInput
            placeholder="Enter your name"
            value={name}
            onChangeText={setName}
            style={{
              flex: 1,
              fontSize: 14,
              paddingHorizontal: 10,
            }}
          />
          <Icon name="badge" type="material" color="#B3C8CF" />
        </View>
      </View>

      <View style={{ width: "100%" }}>
        <View
          style={{
            flexDirection: "row-reverse",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: 50,
            backgroundColor: "white",
            borderWidth: 2,
            borderColor: "#B3C8CF",
            padding: 12,
          }}
        >
          <TextInput
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            style={{
              flex: 1,
              fontSize: 14,
              paddingHorizontal: 10,
            }}
          />
          <Icon name="mail" type="material" color="#B3C8CF" />
        </View>
      </View>

      <View style={{ width: "100%" }}>
        <View
          style={{
            flexDirection: "row-reverse",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: 50,
            backgroundColor: "white",
            borderWidth: 2,
            borderColor: "#B3C8CF",
            padding: 12,
          }}
        >
          <TextInput
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            style={{
              flex: 1,
              fontSize: 14,
              paddingHorizontal: 10,
            }}
          />
          <Icon name="lock" type="material" color="#B3C8CF" />
        </View>
      </View>

      <View style={{ width: "100%" }}>
        <View
          style={{
            flexDirection: "row-reverse",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: 50,
            backgroundColor: "white",
            borderWidth: 2,
            borderColor: "#B3C8CF",
            padding: 12,
          }}
        >
          <TextInput
            placeholder="Enter your profile link"
            value={profileUrl}
            onChangeText={setProfileUrl}
            style={{
              flex: 1,
              fontSize: 14,
              paddingHorizontal: 10,
            }}
          />
          <Icon name="image" type="material" color="#B3C8CF" />
        </View>
      </View>

      <Pressable
        onPress={handleSignUp}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#82aab9" : "white",
            borderColor: pressed ? "#82aab9" : "#B3C8CF",
            borderWidth: 2,
            borderRadius: 50,
            padding: 12,
            width: "100%",
          },
          {
            fontWeight: "400",
            color: pressed ? "white" : "#82aab9",
            fontSize: 14,
            textAlign: "center",
          },
        ]}
      >
        <Text>Sign Up</Text>
      </Pressable>

      <Pressable onPress={() => router.replace("/account/signIn")}>
        <Text style={{ color: "#4D869C", fontWeight: "200", fontSize: 12 }}>
          Already registered?
        </Text>
      </Pressable>
    </View>
  );
}
