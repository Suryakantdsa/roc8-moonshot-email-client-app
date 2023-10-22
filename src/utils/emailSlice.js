import { createSlice } from "@reduxjs/toolkit";

const emailSlice =createSlice({
    name:"email",
    initialState:[],
    reducers:{
        getEmailDatafromDB:(state, action) => {
            return action.payload; // This will replace the existing data in the store with the fetched data
          }
    }
})
export const {getEmailDatafromDB}=emailSlice.actions;
export default emailSlice.reducer;