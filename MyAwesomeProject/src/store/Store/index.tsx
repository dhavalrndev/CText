// import {configureStore} from '@reduxjs/toolkit'
 import Home from '../slice/Home/index'
 import storage from '@react-native-async-storage/async-storage'
// const store= configureStore({
//     reducer:{
//       "Home":  Home,
//     }
// });

// export default store


import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer } from 'reduxjs-toolkit-persist'
// import storage from 'reduxjs-toolkit-persist/lib/storage'

const persistConfig = {
	key: "root",
	version: 1,
	storage: storage,
  whitelist: ['Home'] 

}
const rootReducer = combineReducers({
	Home: Home,
})

// const customizedMiddleware = getDefaultMiddleware({
//   serializableCheck: false
// })


const persistedReducer = persistReducer(persistConfig, rootReducer)
const store= configureStore({
  reducer: persistedReducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck:false}),
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  })
})
export default store