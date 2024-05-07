import React from "react";
import { Link, Tabs } from "expo-router";
import AppHeader from "../../../components/AppHeader";


export default function TabLayout() {

  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          header: () => <AppHeader></AppHeader>,
          title: "Home",
         
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          
        }}
      />
    </Tabs>
  );
}
