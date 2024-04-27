import React, { useEffect, useState } from 'react'

export const UseEffecctDemo = () => {

    const [count, setcount] = useState(0)
    useEffect(()=>{
        console.log("use effect demo")
    },[count])
    //dependency array is empty so it will run only once
    //[count] --> if count is changed then only it will run
  return (
    <div>
        <h1>USE EFFECT DEMo</h1>
        <button onClick={()=>{setcount(count+1)}}>Click me</button>
        <h1>COUNT = {count}</h1>
    </div>
  )
}
