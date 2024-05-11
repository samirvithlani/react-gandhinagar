import axios from 'axios'
import React, { useEffect } from 'react'

export const ApiDemo6 = () => {



    
    const getApi = async () => {

    try{

        const res = await axios.get("https://node5.onrender.com/user/filter",{
            params:{
                name:"Jason",
            }
        })
        console.log("response..",res.data);

    }catch(error){

        console.log("error..",error);
    }

    }
    useEffect(() => {
      
        getApi()
      
    }, [])
    
  return (
    <div>
        <h1>REQ QUERY DEMO</h1>
    </div>
  )
}
