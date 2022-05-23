import React, { useEffect } from 'react';
import { View, Platform, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import { navigationRef } from '../../../Router/RootNavigation';
import { isNull } from '../../util';
import Icon from 'react-native-vector-icons/Ionicons';
import { primary_color } from '../../../Util/Colors';
import { deviceBasedDynamicDimension } from '../../../Util/ApplicationSpace';
const index = (props) => {
    return (
        <View style={{ backgroundColor: primary_color ,flex:1,justifyContent:'center',alignSelf:'flex-start',
        // height:'100%',
        flexGrow:1,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        paddingVertical:deviceBasedDynamicDimension(0, true, 1),
        paddingLeft:deviceBasedDynamicDimension(0, true, 1),
        paddingTop:deviceBasedDynamicDimension(0, true, 1),
        paddingHorizontal:deviceBasedDynamicDimension(0, true, 1),
        margin:deviceBasedDynamicDimension(0, true, 1),
        marginTop:deviceBasedDynamicDimension(0, true, 1),
        }}>

            {
                Platform.OS == 'android' &&

                <Icon.Button name="arrow-back-outline" size={deviceBasedDynamicDimension(25, true, 1)} backgroundColor={primary_color} onPress={() => {

                    if (props?.navigation != null && props?.navigation != undefined) {
                        props?.navigation.pop()
                    } else {
                        navigationRef?.current?.pop()
                    }
                }}></Icon.Button>

            }

            {
                Platform.OS == 'ios' &&
                // <ion-icon name="chevron-back-outline"></ion-icon>
                <Icon.Button name="chevron-back-outline" 
                size={deviceBasedDynamicDimension(30, true, 1)} backgroundColor={primary_color} onPress={() => {

                    if (props?.navigation != null && props?.navigation != undefined) {
                        props?.navigation.pop()
                    } else {
                        navigationRef?.current?.pop()
                    }
                }}></Icon.Button>

            }
        </View>
    )
}

export default index