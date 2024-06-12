import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./redux/CartSlice";
import bankReducer from "./redux/BankSlice";
import contentSlice from "./redux/ContentSlice";
export const store = configureStore({
    reducer: {
        cart:cartReducer,
        bank:bankReducer,
        content:contentSlice,
    }
})