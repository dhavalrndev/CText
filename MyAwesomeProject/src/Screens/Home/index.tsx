import React, { useEffect, useState } from 'react';
import { View, Text, Platform, SafeAreaView, RefreshControl, SectionList } from 'react-native';
import { setData, setVisibleLoader, setisRefresh } from '../../store/slice/Home';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from './styles';
import { GetHomeUrl } from '../../Api/WebServices';
import { onCallGet } from '../../Api/ApiHandler';
import { CreateData, isNull } from '../../Util';
import HomeCellView from '../../component/ScreenComponent/HomeCellView';
import HomeTitleCellView from '../../component/ScreenComponent/HomeTitleCellView'
// import { RefreshControl } from 'react-native';
const Index = () => {

    const dispatch = useDispatch();

    const Data = useSelector(state => state.Home.Data);
    const isRefresh = useSelector(state => state.Home.isRefresh);

    //  Start Loading State true Here and Also call the Api
    React.useEffect(() => {
        onLoadNewData(true)
    }, [])

    const onLoadNewData = (bool: boolean) => {
        dispatch(setisRefresh(false))
        const url = GetHomeUrl();

        if (bool) {
          
                dispatch(setVisibleLoader(true))
             
        }

        onCallGet(url, "", (response: any) => {
            console.log(" response ----", response.data)
            if (bool) {
                      dispatch(setVisibleLoader(false))
                
            }
            if (isRefresh) {
                dispatch(setisRefresh(false))
            }

            if (response?.success) {
                if (isNull(response?.data)) {

                    dispatch(setData(response?.data))


                }
            } else {

            }

          
        })
    }

    const [MainData, setMainData] = useState([])

    useEffect(() => {

        if (Data?.length > 0) {
            let result = CreateData(Data);
            setMainData(result);
            console.log(" CreateData(Data) ", JSON.stringify(result))
        } else {
            setMainData([])
        }

    }, [Data]);


    return (
        <SafeAreaView style={styles.SafeareaStyle}>
            <View style={styles.MainViewStyle}>
                {
                    MainData?.length > 0 &&
                    <RefreshControl

                        onRefresh={() => {
                            dispatch(setData([]));
                            console.log(" start")
                            dispatch(setisRefresh(true))
                            onLoadNewData(false)
                        }}
                        refreshing={isNull(isRefresh) == true ? isRefresh : false}

                    >
                        <SectionList
                            sections={MainData}

                            showsVerticalScrollIndicator={false}

                            showsHorizontalScrollIndicator={false}

                            keyExtractor={(index: number) => index.toString()}

                            renderSectionHeader={({ section: { title } }) => (

                                <HomeTitleCellView title={title}></HomeTitleCellView>

                            )}
                            renderItem={({ item }: { item: any }) => {
                                return (
                                    <HomeCellView item={item}></HomeCellView>
                                )
                            }}
                        >

                        </SectionList>
                    </RefreshControl>

                }
            </View>
        </SafeAreaView>
    )
}
export default Index;
