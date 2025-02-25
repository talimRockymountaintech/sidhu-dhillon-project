import { createSlice } from "@reduxjs/toolkit";


const planSlice=createSlice({
    name:"planslice",
     initialState:{
        plan:[]
     },
     reducers:{
        getPlanData(state,action){
            state.plan= action.payload
        }
     }

})
export default planSlice.reducer
export const{getPlanData}=planSlice.actions