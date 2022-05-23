import React, { } from 'react';
import { View, Text, Platform } from 'react-native';
import { isNull } from '../../../Util';
import {getStringInstance} from '../../../Util/LanguageManager';
import { label_data_not_available } from '../../../Util/String';
import styles from './style';
const index = (props) => {
    const strings=getStringInstance();

          return (
                    <View {...props}     style={styles.nodatFountMainView}>
                              {/* <PartTitleCell style={{ marginTop: 10 }} orientation={systemState.appOrientation} title={label}></PartTitleCell> */}
                              <View style={styles.lineUpView}></View>
                              <View style={styles.cardstyle}>
                                        <Text style={styles.darkGreyBOld}>{isNull(props.label) == true ? props.label :strings?.label_data_not_available}</Text>
                              </View>
                    </View>
          )
}

export default index;
