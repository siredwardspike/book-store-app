import { StyleSheet, Text, View } from "react-native";
import AdminIndex from "./admin";
import Results from "./admin/results";
import SignIn from "./account/signIn";
import SignUp from "./account/signup";
import Index from "./home";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setUserId } from "firebase/analytics";
export default function Page() {
  const [userID, setUserId] = useState();
  const fetchuser = async () => {
    const _userID = await AsyncStorage.getItem("userUID");
    setUserId(_userID);
  };
  useEffect(() => {
    fetchuser();
  }, []);
  if (userID) {
    return <Index></Index>;
  }
  return (
    //  <Index></Index>
    //<View></View>
    <SignIn></SignIn>
  );
}


