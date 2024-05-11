import axios from 'axios'
import React from 'react'

export const ApiDemo5 = () => {

    const postApi = async () => {

        const userObj = {
            name:"sachin",
            email:"sachin1@gmail.com",
            gender:"male",
            status:"active"
        }


        try{

            const res = await axios.post("https://gorest.co.in/public/v2/users",userObj,{
                headers:{
                    "Authorization":"Bearer 87a6e693c6ad5316132fb9df78c80553c9fe17fbee4945d3704e2b55fd94c2b5"
                }
            })
            console.log("response..",res.data);

        }catch(error){

            console.log("error..",error);

        }


    }
  return (
    <div>
            <button onClick={()=>{postApi()}}>POST API</button>
    </div>
  )
}
