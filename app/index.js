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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
