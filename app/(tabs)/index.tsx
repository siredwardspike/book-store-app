import {useWindowDimensions,View , Text} from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

import AppHeader from '../../components/AppHeader';

export default function index() {
    const {height, width,fontScale} = useWindowDimensions();

    return(

       
        <View style={{flex:1,backgroundColor:'#B3C8CF'}}>
          <Text> width:{width}</Text>
          <Text> height:{height}</Text>

          
        </View>
       
      
       
    )
    
}