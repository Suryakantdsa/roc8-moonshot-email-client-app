import { createSlice } from "@reduxjs/toolkit";

const readEmailSlice =createSlice({
    name:"read",
    initialState:[],
    reducers:{
        addRead:(state, action) => {
            return state.push(action.payload); // This will replace the existing data in the store with the fetched data
          }
    }
})
export const {addRead}=readEmailSlice.actions;
export default readEmailSlice.reducer;