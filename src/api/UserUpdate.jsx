import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

export const UserUpdate = () => {
    const id = useParams().id
  const { register, handleSubmit } = useForm({
   defaultValues:async()=>{
        const res = await axios.get("https://node5.onrender.com/user/user/"+id);
        return ({
            name:res.data.data.name,
            email:res.data.data.email
        })
   }
  });

  const submitHandler = async(data) => {
    console.log("data", data);
    const res = await axios.put("https://node5.onrender.com/user/user/"+id,data);
    console.log("update response", res.data.data);
  };

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" {...register("name")} />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" {...register("email")} />
          </div>
          <div>
            <input type="submit"  value="update"/>
          </div>
        </form>
      </div>
    </div>
  );
};
