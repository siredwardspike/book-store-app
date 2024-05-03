import {useWindowDimensions,View , Text} from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

import AppHeader from '../../components/AppHeader';

export default function _layout() {
    const {height, width,fontScale} = useWindowDimensions();

    return(

       <Stack>
      <Stack.Screen
        name="profile"
        options={{header:()=><AppHeader></AppHeader> }}
      />
       
       </Stack>
      
       
    )
    
}