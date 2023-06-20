import { createSlice } from '@reduxjs/toolkit'
import { ordered as cakeOrdered } from '../cake/cakeSlice'

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
        builder.addCase( cakeOrdered,(state,action)=>{
            state.numOfCreams--
        })
    }
})

export default iceCreamSlice.reducer
export const { ordered,restocked } =  iceCreamSlice.actions