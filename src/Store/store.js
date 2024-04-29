import { configureStore } from "@reduxjs/toolkit";
import cartreducer from "./cartSlice"

export const Store = configureStore({
    reducer: {
        cart: cartreducer,
    },
});