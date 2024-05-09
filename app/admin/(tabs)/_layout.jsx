import React from "react";
import { Link, Tabs } from "expo-router";
import AppHeader from "../../../components/AppHeader";
import { Icon } from "react-native-elements";


export default function TabLayout() {

  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          header: () => <AppHeader></AppHeader>,
          title: "Home",
         tabBarIcon:<Icon name="book" />
        }}
      />
      
    </Tabs>
  );
}
