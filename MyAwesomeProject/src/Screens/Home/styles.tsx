import React from 'react';
import {StyleSheet} from 'react-native';
import { deviceBasedDynamicDimension } from '../../Util/ApplicationSpace';
export const styles=StyleSheet.create({
    SafeareaStyle:{
        flex:1,
        backgroundColor:"white",

    },
    MainViewStyle:{
        flex:1,
   
        paddingHorizontal:deviceBasedDynamicDimension(5,true,1)
    }
})
