import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import AppHeader from '../../../components/AppHeader';
import { Tab } from 'react-native-elements';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/


export default function TabLayout() {

  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{header:()=><AppHeader></AppHeader>,
          title: 'Home',
          tabBarIcon: () => <TabBarIcon name="book"  color={"#2C4E70"} />,
     
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          header:()=><AppHeader></AppHeader>,
          title: "Profile",
          tabBarIcon: () => <TabBarIcon name="user-circle"  color={"#2C4E70"} />,
     
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{header:()=><AppHeader></AppHeader>,
          title: 'Cart',
          tabBarIcon: () => <TabBarIcon name="shopping-cart"  color={"#2C4E70"} />,
     
        }}
      />

      
      
    </Tabs>
  );
}