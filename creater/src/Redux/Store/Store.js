import { configureStore, createSlice } from '@reduxjs/toolkit';
import cartReducer from "../CreateSlice/Cartslice";

const Store=configureStore({
    reducer:{
        cart:cartReducer,
    }
})

export default Store;