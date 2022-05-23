import React, { } from 'react';
import { StyleSheet, Platform, Dimensions } from 'react-native';
import { BOLD, MEDIUM, ITALIC, REGULAR, } from '../../util/fonts';
import { normalize } from '../../util';
import { regular_very_small, regular_big, regular_very_big, regular_medium } from '../../util/Constant';
import { primary_color, white } from '../../util/color';


const style = StyleSheet.create({
          titlestyle: {
                    fontSize: normalize(regular_medium),
                    color: white,
                    fontFamily: MEDIUM,
                    
                    alignContent:'center',
                    justifyContent:'center',
                    textAlign:'center',
                    textAlignVertical:'center',
                    padding:0,
                    paddingTop:0,
                    margin:0,
                    marginTop:0,
                    marginVertical:0,
                    paddingVertical:0,
                    // includeFontPadding:false,
                    lineHeight:14,
                    // textAlign: 'center',
                    // justifyContent: 'center',
                    // alignItems: 'center',
                    // alignContent: 'center',

          }, containerstyle: {
                    backgroundColor: primary_color,
                    
                    maxHeight:30,
                    height:30,

                    textAlignVertical:'center',
                                alignContent:'center',  
                                justifyContent:'center',
                                height:30,
                                minHeight:30,
                                maxHeight:30,

                                borderRadius: 12,

                    // backgroundColor:'red',
                    // flex: 1,
                    
                    // justifyContent: 'center',
                    // alignContent: 'center',
                    // alignSelf: 'center',
                    
          },
});

export default style