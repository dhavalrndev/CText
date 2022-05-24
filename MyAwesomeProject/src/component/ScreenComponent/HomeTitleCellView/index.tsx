import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { getDateTitle, isNull } from '../../../Util';
import styles from './style';

const Index = (props: any) => {

    const [DateTItle, setDateTitle] = useState("");

    useEffect(() => {
        let result = getDateTitle(props?.title)
        setDateTitle(result);
    }, []);
    // console.log("Props ", props)
    return (
        <View style={styles.MainView}>
            <Text style={styles.TextStyle}>{DateTItle}</Text>
        </View>
    )
}

export default Index;