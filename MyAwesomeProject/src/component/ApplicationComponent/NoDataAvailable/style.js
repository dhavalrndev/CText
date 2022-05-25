import React, { } from 'react';
import { StyleSheet,Platform } from 'react-native';
import { dark_gray, primary_color } from '../../../Util/Colors';
// import { Poppins_Medium } from '../../../Util/Fonts';
import { normalize } from '../../../Util';
import { deviceBasedDynamicDimension } from '../../../Util/ApplicationSpace';

const style = StyleSheet.create({
          darkGreyBOld: {
                    color: "gray",
                    fontSize: deviceBasedDynamicDimension(14,true,1),
                    lineHeight: deviceBasedDynamicDimension(14,true,1),
                    alignSelf: 'center',
                    fontWeight:'800'
                    
          },
          cardstyle: {
                    

                    alignContent: 'center',
                    justifyContent: 'center',
                    
                    elevation: 5,
                    flex: 1,
                    shadowRadius: 0,
                    
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                    marginHorizontal: 0, flex: 1,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.5,
                    // shadowRadius: 2,

                    backgroundColor: 'white',

                    ...Platform.select({
                        ios: {
                          backgroundColor: 'red',
                          shadowRadius:4, 
                          shadowOpacity:0.6, 
                          shadowOffset:{ width: 0, height: 0 },
                          borderRadius:0,
                          backgroundColor: "white",
                        },
                        android: {
                  
                        },
                    })
          },
          lineUpView: {
                    width: 4,
                    height: '100%',
                    backgroundColor: "green",
                    borderTopLeftRadius: 14,
                    borderBottomLeftRadius: 14,
                    // borderRadius: 14,
          },
          nodatFountMainView: {
                    marginHorizontal: 15,
                    marginVertical: 15,
                    flexDirection: 'row',
                    // backgroundColor:'white',
                    // backgroundColor:'red',
                    height: 50
          },
});

export default style;