import {configureStore} from '@reduxjs/toolkit'
import Home from '../slice/Home/index'
const store= configureStore({
    reducer:{
      "Home":  Home,
    }
});

export default store