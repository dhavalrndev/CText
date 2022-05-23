import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  Data:[],
  visibleLoader:false,
}
export const Index = createSlice({
  name: 'Home',
  initialState,
  reducers: {

    setData: (state, action) => {
        state.Data=action.payload
    },

    setVisibleLoader: (state, action) => {
        state.visibleLoader=action.payload
    },
  },
})
 
export const {  setData,setVisibleLoader } = Index.actions
export default Index.reducer