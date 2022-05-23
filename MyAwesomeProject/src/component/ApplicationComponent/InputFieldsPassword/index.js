import React,{useState,useEffect} from 'react';
import { View, TextInput, Image, Pressable } from 'react-native';
import { } from '../../../Util/ApplicationSpace';
import { } from '../../../Util/Fonts'
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import { EmailIcon,hiddenPassword,showPassword } from '../../../Screens/assets';
import { textInputLoginColor } from '../../../Util/Colors';

const Index = (props) => {

    const orientation = props?.orientation ? props?.orientation : true;
    const style = styles.getSheet(orientation);
    const [visible,setVisible]=useState(false);
    const FieldRef=React.useRef();

    useEffect(()=>{
        setTimeout(()=>{
            if(props.returnref!=null && props?.returnref!=undefined)
            {
                props?.returnref(FieldRef)
            }
        },1000);
    },[])

    return (
        <View style={[style.MainView, { marginTop: props?.marginTop }]}>

            <View style={style.LeftMaskView}>
                {
                    props?.source &&
                    <Image source={props?.source} height={30} width={30} style={style.LeftMaskImageView} />
                }
            </View>

                <TextInput 
                ref={FieldRef}
                secureTextEntry={visible}
                underlineColorAndroid={"transparent"}
                keyboardAppearance='default'
                keyboardType={props?.default?props?.keyboardType:"default"}
                onChangeText={(text)=>{
                    if(props?.onChangeText!=null && props?.onChangeText!=undefined)
                            props?.onChangeText(text);
                }}
                onSubmitEditing={ ()=>{
                    if(props?.onSubmitEditing!=null && props?.onSubmitEditing!=undefined)
                            props?.onSubmitEditing();
                }}
                value={props?.value}
                defaultValue={props.defaultValue}
                // ref={props?.ref}
                maxLength={props?.maxLength}
                placeholderTextColor={props?.placeholder?props.placeholderTextColor:textInputLoginColor}
                placeholder={props?.placeholder?props.placeholder:""}
                numberOfLines={props?.numberOfLines?props?.numberOfLines:1} style={[style.StyleInputFields]}>
                </TextInput>
                <View style={style.LeftMaskView}>
                    
                
                    <Pressable onPress={()=>{
                        setVisible(!visible);
                    }}>
                    <Image source={ visible ==false?showPassword:hiddenPassword} height={30} width={30} style={style.LeftMaskImageView} />
                    </Pressable>
                 
            </View>
        </View>
    )
}

export default Index;