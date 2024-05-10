import { StyleSheet, Text, View } from "react-native";
import AdminIndex from "./admin";
import Results from "./admin/(tabs)/results";
import SignIn from "./account/signIn";
import SignUp from "./account/signup";
import Index from "./home";
export default function Page() {
  return (
     <Index></Index>
    //<View></View>
   // <SignIn></SignIn>
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
