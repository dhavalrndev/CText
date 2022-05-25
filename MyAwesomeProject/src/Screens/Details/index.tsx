import React, { useEffect, useState, useLayoutEffect } from 'react';
import { View, Platform, Text, TouchableOpacity, Pressable, SafeAreaView, ScrollView } from 'react-native';
import style from './styles';
 
import { isNull } from '../../Util';
const Index = ({ navigation, route }: { navigation: any, route: any }) => {

    useLayoutEffect(() => {
        navigation?.setOptions({ title: "Details" })
    }, [])

    const [Item, setItem] = useState("");

    useEffect(() => {
        if (isNull(route?.params?.item) == true) {
            setItem(route?.params?.item);
        }
    }, []);


    const CellView = ({ value, keyname }: { value: string, keyname: string }) => (
        <View style={style.cellview}>
            <Text style={style.TextStyleCaption}>{keyname}</Text>
            <Text style={style.TextStyleValue}>{value}</Text>
        </View>
    )

    return (
        <SafeAreaView style={style.MainCellView}>
            {/* <View style={{ flex: 1 }}> */}
                <View style={style.CardStyle}>

                    <ScrollView style={{ flex: 1,  width: '100%', height: '100%' }}>
                        <View style={{ flex: 1 }}>
                            {
                                isNull(Item?.Flightnr) === true &&
                                <CellView
                                    value={Item?.Flightnr}
                                    keyname={"Flight Nr"}>
                                </CellView>
                            }

                            {
                                isNull(Item?.Date) === true &&
                                <CellView
                                    value={Item?.Date}
                                    keyname={"Date"}>

                                </CellView>
                            }

                            {
                                isNull(Item["Aircraft Type"]) === true &&
                                <CellView
                                    value={Item["Aircraft Type"]}
                                    keyname={"Aircraft Type"}>

                                </CellView>
                            }

                            {
                                isNull(Item?.Tail) === true &&
                                <CellView
                                    value={Item?.Tail}
                                    keyname={"Tail"}>

                                </CellView>
                            }


{
                                isNull(Item?.Departure) === true &&
                                <CellView
                                    value={Item?.Departure}
                                    keyname={"Departure"}>

                                </CellView>
                            }


{
                                isNull(Item?.Destination) === true &&
                                <CellView
                                    value={Item?.Destination}
                                    keyname={"Destination"}>

                                </CellView>
                            }



{
                                isNull(Item?.Time_Depart) === true &&
                                <CellView
                                    value={Item?.Time_Depart}
                                    keyname={"Time_Depart"}>

                                </CellView>
                            }




{
                                isNull(Item?.Time_Arrive) === true &&
                                <CellView
                                    value={Item?.Time_Arrive}
                                    keyname={"Time_Arrive"}>

                                </CellView>
                            }


{
                                isNull(Item?.DutyID) === true &&
                                <CellView
                                    value={Item?.DutyID}
                                    keyname={"DutyID"}>

                                </CellView>
                            }


{
                                isNull(Item?.DutyCode) === true &&
                                <CellView
                                    value={Item?.DutyCode}
                                    keyname={"DutyCode"}>

                                </CellView>
                            }


{
                                isNull(Item?.Captain) === true &&
                                <CellView
                                    value={Item?.Captain}
                                    keyname={"Captain"}>

                                </CellView>
                            }


{
                                isNull(Item["First Officer"]) === true &&
                                <CellView
                                    value={Item["First Officer"]}
                                    keyname={"First Officer"}>

                                </CellView>
                            }



{
                                isNull(Item["Flight Attendant"]) === true &&
                                <CellView
                                    value={Item["Flight Attendant"]}
                                    keyname={"Flight Attendant"}>

                                </CellView>
                            }

                        </View>
                    </ScrollView>


                {/* </View> */}
            </View>

        </SafeAreaView>
    )
}


export default Index;
