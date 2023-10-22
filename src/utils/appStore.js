import { configureStore } from "@reduxjs/toolkit";
import emailSlice from "./emailSlice";
import readEmailSlice from "./readEmailSlice";
import favoritesSlice from "./favoritesSlice";

const appStore=configureStore(
   { reducer:{
    email:emailSlice,
    read:readEmailSlice,
    favorite:favoritesSlice
    }}
)
export default appStore