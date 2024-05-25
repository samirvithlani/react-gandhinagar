import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        //action...
        addToCart: (state, action) => {
            console.log("state", state)
            console.log("action", action)
            state.cart = [...state.cart,action.payload]
        }
    }
})

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
//recuer ={reducers}