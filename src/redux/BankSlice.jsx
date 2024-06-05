import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  amount: 0,
};
const bankSlice = createSlice({
  name: "bank",
  initialState,
  reducers: {
    depositAction: (state, action) => {
      //state --> initial state
      //action : type, payload
      //type : bank/deposit

      return state = { ...state, amount: state.amount + action.payload };
    },
    withdrawAction: (state, action) => {
      return state = { ...state, amount: state.amount - action.payload };
    }
  },
});

export const { depositAction,withdrawAction } = bankSlice.actions;
export default bankSlice.reducer;
