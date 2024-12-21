import React from 'react'
import axios from 'axios'
import {useState} from 'react'

export const UploadFile = () => {

  const [url,setUrl]  = useState()
  const uploadChangeHandler = async(event)=>{
  console.log(event.target.files[0])

  

  const formData = new FormData();
  formData.append("myImage",event.target.files[0])
  const res = await axios.post("http://localhost:3001/upload/upload",formData)
  console.log(res)
  setUrl(res.data?.url)
  }
  return (
    <div>
        <h1>UPLOAD FILE</h1>
        <input type="file" onChange={(event)=>{uploadChangeHandler(event)}}></input>
        {
          url &&
          <img src = {url}></img>
        }
    </div>
  )
}
