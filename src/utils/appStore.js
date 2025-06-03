import { configureStore, createSlice } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";


const appStore = configureStore({
    reducer: {
        cart : cartReducer, // here this is the name only  
    },
})
export default appStore;