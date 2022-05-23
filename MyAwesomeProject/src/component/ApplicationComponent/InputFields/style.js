import React from 'react';
// import {} from 'react-native';
import {} from '../../../Util/ApplicationSpace';
import {
    ProximaNova_Regular,
    ProximaNova_ExtraBold,
    ProximaNova_Bold,
    Proxima_Nova_Alt_Bold,
    ProximaNova_Black,ProximaNova_thin
} from '../../../Util/Fonts'


import { StyleSheet, Dimensions } from 'react-native';
import { white, red, black, inputFieldBackgroundColor,textInputLoginColor } from '../../../Util/Colors'
 
import {
      Prod_paddileft,
      Prod_paddingPer,
      veryMediumSPace,MediumSPace30,
      verySmallSPace,   RegularSPace, MediumSPace, HightSpace, deviceBasedDynamicDimension, MediumSPaceDouble
} from '../../../Util/ApplicationSpace'
import { normalize } from '../../../Util'

export default class style {
      static getSheet(orientation) {
            return StyleSheet.create({
                
                MainView:{
                    flexDirection:'row',
                    height:deviceBasedDynamicDimension(48, false, ),
                    backgroundColor:inputFieldBackgroundColor,
                    borderRadius:deviceBasedDynamicDimension(10, false, 1),
                    flex:1,
                    width:'100%',
                },

                LeftMaskView:{
                    height:'100%',
                    width:45,
                    // backgroundColor:'red',
                    justifyContent:'center'
                    ,alignContent:'center'
                },
                

                LeftMaskImageView:{
                    alignSelf:'center',
                    tintColor:white,
                    width:deviceBasedDynamicDimension(20, false, 1),
                    height:deviceBasedDynamicDimension(20, false, 1),
                },
                

                  StyleInputFields:{
                    //      
                        height:"100%",
                       flex:1,
                        // minHeight:deviceBasedDynamicDimension(48, false, 1),
                        // maxHeight:deviceBasedDynamicDimension(48, false, 1),
                        lineHeight:deviceBasedDynamicDimension(20, false, 1),
                        backgroundColor:inputFieldBackgroundColor,                        
                        color:'red',
                        fontSize:normalize(16),
                        fontFamily:ProximaNova_Regular,                      
                        includeFontPadding:false,
                        padding:0,                        
                        paddingHorizontal:deviceBasedDynamicDimension(orientation?10:15, false, 1),
                        paddingBottom:0,
                        paddingTop:0,
                        marginBottom:0,
                        marginTop:0,
                        marginHorizontal:0,
                        marginVertical:0,
                        marginBottom:0,
                        textAlign:'left',
                        justifyContent:'center',
                        textAlignVertical:'center',
                        color:textInputLoginColor,
                        borderRadius:deviceBasedDynamicDimension(10, false, 1), 
                        // backgroundColor:'red',
                  }
                  
            });
      }
}



// export default style;