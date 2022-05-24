import React from 'react';
import {StyleSheet} from 'react-native';
import { deviceBasedDynamicDimension } from '../../../Util/ApplicationSpace';

const styles=StyleSheet.create({
    MainView:{
        flex:1,
        height:deviceBasedDynamicDimension(45,true,1),
        maxHeight:deviceBasedDynamicDimension(45,true,1),
        justifyContent:'center',
        
        backgroundColor:'gray',
        borderColor:"#C8C8C8",
        borderBottomColor:'black',
        borderBottomWidth:deviceBasedDynamicDimension(0.6,true,1),
        borderTopWidth:deviceBasedDynamicDimension(0.6,true,1),
    },
    TextStyle:{
        paddingHorizontal:deviceBasedDynamicDimension(10,true,1),
        fontSize:deviceBasedDynamicDimension(14,true,1),
        lineHeight:deviceBasedDynamicDimension(16,true,1),
        alignSelf:'center',
        width:'100%',
        textAlign:'left',
        color:'black'
    }
})
export default styles;