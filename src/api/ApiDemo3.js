import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ApiDemo3 = () => {
  //GET : fetch data from server
  //POST : send data to server
  //PUT : update data to server
  //DELETE : delete data from server

  const navigate = useNavigate();

//   const addDatasubmitHandlinr = async (data) => {
//     const userobjtosubmit = {
//       name: data.name,
//       age: data.age,
//       email: "sachingmail.com",
//       isActive: false,
//     };


  const addData = async () => {
    const userobjtosubmit = {
      name: "sachin",
      age: 46,
      email: "sachingmail.com",
      isActive: false,
    };
    const res = await axios.post(
      "https://node5.onrender.com/user/user",
      userobjtosubmit
    );
    console.log("res...", res);
    console.log("res.data", res.data);
    if (res.status === 201) {
      //redirect...

      toast.success("User Added Successfully...", {
        position: "top-left",
        autoClose: 2700,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setTimeout(() => {
        navigate("/apidemo1");
      }, 3000);
    } else {
      alert("Something went wrong");
    }
  };
  return (
    <div>
      <ToastContainer
        position="top-left"
        autoClose={2700}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <button
        onClick={() => {
          addData();
        }}
      >
        Add Data
      </button>
    </div>
  );
};
