import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const UserDetail = () => {
    const id = useParams().id
    const [user, setuser] = useState({})
    const getUserById = async () => {


            const res = await axios.get("https://node5.onrender.com/user/user/"+id);
            console.log("api response axios...", res.data);
            console.log("api response axios...", res.status);
            setuser(res.data.data);

    }
    useEffect(() => {
      
        getUserById();
      
    }, [])
    
  return (
    <div>
        <div style={{textAlign: "center"}}>
            <h1>User Detail</h1>
            <h2>{user.name}</h2>
            <h2>{user.email}</h2>
        </div>
    </div>
  )
}
