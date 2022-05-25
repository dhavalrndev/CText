import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { deviceBasedDynamicDimension } from '../../Util/ApplicationSpace';
const style = StyleSheet.create({

    MainCellView: {
        flex: 1,
        minHeight: deviceBasedDynamicDimension(100, true, 1),
        height: 'auto',
        backgroundColor: 'white',
        paddingHorizontal: deviceBasedDynamicDimension(15, true, 1),
        paddingVertical: deviceBasedDynamicDimension(15, true, 1),
    },
    CardStyle: {
        //   ... Platform.select({
        //         ios: () => 
        //           StyleSheet.create({
        //             container: {
        //               shadowRadius:5, 
        //               shadowOpacity:5, 
        //               shadowOffset:{ width: 0, height: 4 },
        //               borderRadius:10,
        //               backgroundColor: "white",
        //             }
        //           }),
        //         android: () => 
        //           StyleSheet.create({
        //             container: {
        //               elevation:5,
        //               borderRadius:10, 

        //               backgroundColor: "white",
        //               // marginVertical:1,
        //               // paddingVertical:1,

        //             }
        //           })
        // }
        ...Platform.select({
            ios: {
                shadowRadius: 5,
                shadowOpacity: 5,
                shadowOffset: { width: 0, height: 4 },
                borderRadius: 10,
                backgroundColor: "white",
            },
            android: {
                elevation: 5,
                borderRadius: 10,
                backgroundColor: "white",
            },
            default: {

                backgroundColor: 'blue'
            }
        }),
        width: '100%',
       flex:1,
        borderRadius:10,     
        height:'100%',
        flexGrow:1,
        minHeight:10,             
        padding: deviceBasedDynamicDimension(10, true, 1),
        backgroundColor: "#FFFFFF",
        // justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
    },

    cellview: {
        // flex: 1,
     
        height: deviceBasedDynamicDimension(40, true, 1),
        maxHeight: deviceBasedDynamicDimension(40, true, 1),
        // marginBottom:deviceBasedDynamicDimension(5, true, 1),
        borderBottomWidth:deviceBasedDynamicDimension(0.6, true, 1),
        marginBottom:deviceBasedDynamicDimension(10, true, 1),
        flexDirection:'row',
        backgroundColor:'pink'
        ,borderTopLeftRadius:10
        ,borderTopRightRadius:10
    },
    TextStyleCaption: {
        fontSize: deviceBasedDynamicDimension(16, true, 1),
        lineHeight: deviceBasedDynamicDimension(18, true, 1),
        color: 'black',
        fontWeight:'700',
        flex: 5,
        alignSelf:'center',
        paddingHorizontal:10,

        // backgroundColor:'green'
    }, TextStyleValue: {
        paddingHorizontal:10,
        fontSize: deviceBasedDynamicDimension(16, true, 1),
        lineHeight: deviceBasedDynamicDimension(18, true, 1),
        color: 'black',
        flex: 5,
        alignSelf:'center',
        fontWeight:'700',
        // backgroundColor:'red',
    }
}

);

export default style;
