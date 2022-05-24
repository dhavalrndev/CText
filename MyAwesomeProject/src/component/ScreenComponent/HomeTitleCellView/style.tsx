import React from 'react';
import {StyleSheet} from 'react-native';
import { deviceBasedDynamicDimension } from '../../../Util/ApplicationSpace';
import { gray_color } from '../../../Util/Color';

const styles=StyleSheet.create({
    MainView:{
        flex:1,
        height:deviceBasedDynamicDimension(50,true,1),
        maxHeight:deviceBasedDynamicDimension(50,true,1),
        justifyContent:'center',
        
        backgroundColor:gray_color,
        borderColor:"#C8C8C8",
        borderBottomColor:'#C8C8C8',
        borderBottomWidth:deviceBasedDynamicDimension(0.6,true,1),
        borderTopWidth:deviceBasedDynamicDimension(0.6,true,1),
    },
    TextStyle:{
        paddingHorizontal:deviceBasedDynamicDimension(10,true,1),
        fontSize:deviceBasedDynamicDimension(16,true,1),
        lineHeight:deviceBasedDynamicDimension(18,true,1),
        marginVertical:deviceBasedDynamicDimension(10,true,1),

        fontWeight:'700',
        alignSelf:'center',
        width:'100%',
        textAlign:'left',
        color:'black'
    },
    DestTextStyle:{
        paddingHorizontal:deviceBasedDynamicDimension(10,true,1),
        fontSize:deviceBasedDynamicDimension(16,true,1),
        lineHeight:deviceBasedDynamicDimension(18,true,1),
        marginVertical:deviceBasedDynamicDimension(0,true,1),

        fontWeight:'400',
        alignSelf:'center',
        width:'100%',
        textAlign:'left',
        color:'black'
    },
  
})
export default styles;