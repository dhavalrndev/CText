import React from 'react';
import { View, Text, Platform, SafeAreaView ,SectionList} from 'react-native';
import { setData, setVisibleLoader } from '../../store/slice/Home';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from './styles';
import { GetHomeUrl } from '../../Api/WebServices';
import { onCallGet } from '../../Api/ApiHandler';
const Index = () => {

    const dispatch = useDispatch();
    const visibleLoader =useSelector(state=>state.Home.visibleLoader);
    const Data =useSelector(state=>state.Home.Data);
   
    //  Start Loading State true Here and Also call the Api
    React.useEffect(() => {
        // dispatch(setVisibleLoader(false))
        const url=GetHomeUrl();
        dispatch(setVisibleLoader(true))
          onCallGet(url,"",(response:any)=>{
              console.log(" response ",response)
            dispatch(setVisibleLoader(false))
          })
    }, [])

    return (
        <SafeAreaView style={styles.SafeareaStyle}>
            <View style={styles.MainViewStyle}>
            </View>
        </SafeAreaView>
    )
}
export default Index;
