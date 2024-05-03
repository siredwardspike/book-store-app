import {useWindowDimensions,View , Text} from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import Item from '../../components/bookItem';
import AppHeader from '../../components/AppHeader';

let book1={name:"magic book" , author:"segara" , category:"fantasy"}

export default function index() {
    const {height, width,fontScale} = useWindowDimensions();

    return(

       
        <View>
          <Item item={book1}></Item>
        </View>
       
      
       
    )
    
}