import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { depositAction, withdrawAction } from "../redux/BankSlice";

export const BankComponent = () => {
  const dispatch = useDispatch();

  const [deposit, setdeposit] = useState(0);
  const [withdraw, setwithdraw] = useState(0);
  const depositHandler = () => {
    console.log("Deposit", deposit);
    dispatch(depositAction(parseInt(deposit)));
  };
  const withdrawHandler = () => {
    dispatch(withdrawAction(parseInt(withdraw)));
  };
  return (
    <div>
      <h1>Bank Component</h1>
      <div>
        <label>DEPOSIT</label>
        <input
          type="text"
          placeholder="Enter amount to deposit"
          onChange={(e) => {
            setdeposit(e.target.value);
          }}
        />
        <button
          onClick={() => {
            depositHandler();
          }}
        >
          DEPOSIT
        </button>
      </div>
      <div>
        <label>DEPOSIT</label>
        <input
          type="text"
          placeholder="Enter amount to deposit"
          onChange={(e) => {
            setwithdraw(e.target.value);
          }}
        />
        <button
          onClick={() => {
            withdrawHandler();
          }}
        >
          withdraw
        </button>
      </div>
    </div>
  );
};
