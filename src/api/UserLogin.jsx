import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export const UserLogin = () => {

    var users = [
        {
            id:1,
            name:"raj",
            email:"raj@gmail.com",
            password:"123"
        },
        {
            id:2,
            name:"ram",
            email:"ram@gmail.com",
            password:"123"
        }
    ]

    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();
    const submitHandler = (data) => {
        //data.email || data.password

        var user = users.find((u)=>u.email === data.email && u.password === data.password)
        //api
        if(user!=undefined){
            alert("Login Success")
            localStorage.setItem("id",user.id)
            navigate("/")

        }
        else{
            alert("Login Failed")
        }

    }
  return (
    <div>
        <h1>USER LOGIN</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>Email</label>
                <input type="email" name="email" {...register("email")}/>
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password" {...register("password")}/>
            </div>
            <div>
                <input className='btn btn-info' type="submit" value="login"></input>
            </div>
        </form>
    </div>
  )
}
