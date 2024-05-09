import { StyleSheet, Text, View } from "react-native";
import AdminIndex from "./admin";
import TabLayout from "./users/(tabs)";
import Results from "./admin/(tabs)/results";
export default function Page() {
  return (
      <AdminIndex></AdminIndex>
     /* <TabLayout/>*/
   
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
