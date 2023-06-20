const { cakeActions } = require('../cake/cakeSlice')
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    numOfCreams : 15
}
const iceCreamSlice = createSlice({
    name : "iceCream",
    initialState,
    reducers : {
           ordered : (state)=>{
               state.numOfCreams--
           },
           restocked : (state,action)=>{
               state.numOfCreams += action.payload
           }
    },
    // extraReducers : {
    //     ['cake/ordered']: (state)=>{
    //         state.numOfCreams--
    //     }
    // }
    extraReducers : (builder)=>{
        builder.addCase(cakeActions.ordered,(state,action)=>{
            state.numOfCreams--
        })
    }
})

export default iceCreamSlice.reducer
export const { ordered,restocked } =  iceCreamSlice.actions