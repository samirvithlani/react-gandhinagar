import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const FormDemo3 = () => {

    const [userData, setuserData] = useState({})
    const [isSubbmited, setisSubbmited] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({defaultValues:{name:"delta",age:18}},{ mode: "all" },
 );

  const submitHandler = (data) => {
    console.log(data);
    setuserData(data)
    setisSubbmited(true)
  };

  const validationSchema = {
    name: {
      required: {
        value: true,
        message: "Name is required*",
      },
      minLength: {
        value: 3,
        message: "Name should have atleast 3 characters",
      },
      maxLength: {
        value: 15,
        message: "Name should not exceed 10 characters",
      },
    },
  };

  return (
    <div>
      <h1>FORM DEMO 3 MODE example</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>NAME</label>
          <input
            type="text"
            {...register("name", validationSchema.name)}
          ></input>
          <span>{errors.name && errors.name.message}</span>
        </div>
        <div>
          <label>AGE</label>
          <input type="text" {...register("age")}></input>
        </div>
        <div>
          <input type="submit" value="SUBMIT" />
        </div>
      </form>
      {
        isSubbmited && <div>
        <h2>Form Data</h2>
        <p>Name: {userData.name}</p>
        <p>Age: {userData.age}</p>
    </div>
      }
        
    </div>
  );
};
