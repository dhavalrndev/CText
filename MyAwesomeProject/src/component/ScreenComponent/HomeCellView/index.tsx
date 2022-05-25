import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import { isNull } from '../../../Util';
import style from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../HomeTitleCellView/style';
const index = (props: any) => {

    const [ImageType, setImageType] = useState("");
    const [DestName, setDestName] = useState("");
    const [DestHoldName, setDestHoldName] = useState("");

    const [TravelTime, setTravelTime] = useState("");

    useEffect(() => {
        if (isNull(props?.item?.DutyCode) == true) {

            if (props?.item?.DutyCode === "LAYOVER") {
                setImageType("LAYOVER");
                setDestName("LAYOVER")
                setDestHoldName(props?.item?.Destination);
            } else if (props?.item?.DutyCode === "FLIGHT") {
                setImageType("FLIGHT");
                setDestName(props?.item?.Departure + props?.item?.Destination)
                setTravelTime(props?.item?.Time_Depart + " - " + props?.item?.Time_Arrive)
            } else if (props?.item?.DutyCode === "OFF") {
                setImageType("OFF")
                setDestHoldName(props?.item?.Destination);
                setDestName("OFF")
            } else if (props?.item?.DutyCode === "Standby") {
                setImageType("StandBy")
                setDestHoldName(props?.item?.Destination);
                setDestName("StandBy")
                setTravelTime("02:00 - 02:00")
            }
        }
    }, []);

    console.log(" props ", props?.item)
    return (
        <TouchableOpacity onPress={()=>{
            if(ImageType!=="OFF" && ImageType!=="" && isNull(ImageType)==true &&  props?.callBack!=null && props?.callBack!=undefined)
            {
                props?.callBack(props?.item);
            }
            
        }} activeOpacity={0.5}>
            <View style={style.MainView}>

                <View style={style.ChildOne}>

                    {
                        ImageType === "FLIGHT" &&

                        <Icon name="plane" size={30} color="#000000" />
                    }


                    {
                        ImageType === "LAYOVER" &&
                        <Icon name="suitcase" size={30} color="#000000" />


                    }


                    {
                        ImageType === "StandBy" &&
                        <Icon name="calendar-o" size={30} color="#000000" />


                    }

                </View>

                <View style={style.ChildSecond}>

                    {
                        ImageType !== "OFF" ?
                            <Text style={styles.TextStyle}>{DestName}</Text> :
                            <Text style={styles.TextStyle}>Today is your Off</Text>
                    }



                    {
                        isNull(DestHoldName) == true && ImageType !== "OFF" &&
                        <Text style={[styles.DestTextStyle, { marginVertical: 0 }]}>{DestHoldName}</Text>
                    }

                </View>
                <View style={style.ChildThird}>
                    {/* <Text style={styles.TextStyle}>{DestName}</Text> */}


                    {ImageType !== "OFF" &&
                        <Text style={style.TextTimeStyle}>{TravelTime}</Text>
                    }


                </View>
            </View>
        </TouchableOpacity>
    )
}

export default index;