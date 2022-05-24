import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';
import { deviceBasedDynamicDimension } from '../../../Util/ApplicationSpace';
// import 

const style=StyleSheet.create({
    MainView:
    {
        maxHeight:deviceBasedDynamicDimension(70,true,1),
        height:deviceBasedDynamicDimension(70,true,1),
        marginVertical:deviceBasedDynamicDimension(0,true,1),
        borderBottomWidth:deviceBasedDynamicDimension(0.6,true,1),
        borderBottomColor:"#c8c8c8",
        flex:1,
        backgroundColor:'#F5F5F5',       
        flexDirection:'row' 

    },
    ChildOne:{
        width:  deviceBasedDynamicDimension(80,true,1),
        // backgroundColor:'white',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',

    },ChildSecond:{
        // width:  "45%",
        height:'100%',
        flex:0.6,
        // backgroundColor:'green',
        
    },ChildThird:{
        width:  "45%",flex:0.4,
        height:'100%',
        // backgroundColor:'pink',
        justifyContent:'flex-end',
        paddingBottom:deviceBasedDynamicDimension(5,true,1),
                
    },
    TextStyle:{
        fontSize:deviceBasedDynamicDimension(18,true,1),
        lineHeight:deviceBasedDynamicDimension(22,true,1),
        marginVertical:deviceBasedDynamicDimension(5,true,1),
        backgroundColor:'red',
    },
    TextTimeStyle:{
        // paddingHorizontal:deviceBasedDynamicDimension(10,true,1),
        fontSize:deviceBasedDynamicDimension(14,true,1),
        lineHeight:deviceBasedDynamicDimension(16,true,1),
        // marginVertical:deviceBasedDynamicDimension(10,true,1),
        // maxWidth:'100%',
        // backgroundColor:'green',
        textAlignVertical:'center',
        width:'100%',
        fontWeight:'400',
      
        alignSelf:'center',
        // width:'100%',
        textAlign:'center',
        color:'red'
    }
})


export default style;