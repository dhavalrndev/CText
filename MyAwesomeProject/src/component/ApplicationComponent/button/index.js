import React, { useEffect } from 'react';
import { View, Platform, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import { isNull } from '../../util';
import { primary_color,lightgray,gray,white,black } from '../../util/color';
import style from './style';
const index = (props) => {
          return (
                    <Button
                    
                    loadingProps={{
                         animating: true,
                         color: 'white',                                
                         alignSelf: 'center', alignItems: 'center',
                              // backgroundColor:'white',
                         // height: 20, width: 20,
                         alignContent: 'center',                         
                         justifyContent: 'center'
                     }}

                     loadingStyle={{
                         // flex:1,
                         height: '100%', 
                         height: 20, width: 20,
                         // backgroundColor:'white',
                         alignSelf: 'center', alignContent: 'center',
                         alignContent: 'center', alignItems: 'center',
                         justifyContent: 'center'
                     }}
                              {...props}
                              disabledStyle={{ backgroundColor: gray  }}
                              disabledTitleStyle={{color:"white"}}
                              titleStyle={[style.titlestyle,{...props.titleStyle}]}
                              containerStyle={[style.containerstyle, { ...props.containerStyle  }]}
                              buttonStyle={[{  borderRadius: 12,}, { ...props.style }]}
                              title={isNull(props.title) == true ? props.title : ''}
                              style={[{ ...props.style,   }]}
                    />
          )
}
export default index;