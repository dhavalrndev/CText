/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
//  import { persistStore, persistReducer } from 'reduxjs-toolkit-persist'
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store/Store';
import { GetHomeStack } from './src/Route';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './src/component/ApplicationComponent/Loader'
// import { PersistGate } from 'reduxjs-toolkit-persist/integration/react'

import { persistStore } from "redux-persist"
import { PersistGate } from "redux-persist/integration/react"

import { decrement, increment ,incrementByAmount} from './src/store/slice/Home';
const App = () => {



  const visibleLoader =useSelector(state=>state.Home.visibleLoader);
  // const {   } = useSelector((state: RootState) => state.Home)
  return (
    <>
      
        <GetHomeStack></GetHomeStack>
       {
        visibleLoader==true && 
        <Loader visible={visibleLoader}>

        </Loader>
      }  
       
      
    </>
  );
};

// export default App;
export default () => 
{
  const persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
            <App />
            </PersistGate>
         </Provider>

  )
}

