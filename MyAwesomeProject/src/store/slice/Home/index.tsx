import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  Data:[],
  isRefresh:true,
  visibleLoader:false,
}
export const Index = createSlice({
  name: 'Home',
  initialState,
  reducers: {

    setData: (state, action) => {
      console.log(" payload",action.payload)
        state.Data=action.payload
    },

    setVisibleLoader: (state, action) => {
        state.visibleLoader=action.payload
    },
    setisRefresh: (state, action) => {
      state.isRefresh=action.payload
  },
  },
})
 
export const {  setData,setVisibleLoader ,setisRefresh} = Index.actions
export default Index.reducer