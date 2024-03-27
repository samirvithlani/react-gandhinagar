import React, { useState } from 'react'

export const UseStateDemo = () => {

    //var count = 0;

    //count = variable
    //setCount = function : use: to update the value of count
    //useState = hook
    //(0) = initial value
    
    const [count,setCount] = useState(0) // Number
    const [isActive, setisActive] = useState(false) // Boolean
    //const [users,setUsers] = useState([]) // Array
    //const [users,setUsers] = useState({}) // Object
    //const [users,setUsers] = useState() // Any

    const increseCount = () => {

        //count = count + 1;
        setCount(count+1)
        console.log("count...",count);

    }

  return (
    <div>
        <h1 style={{color:"blue"}}>USE STATE DEMO</h1>
        <h2>Count: {count}</h2>
        <button onClick={()=>{increseCount()}}>+</button>

        
            {
                isActive? <h2>Active</h2> : <h2>Inactive</h2>
            }
        
        <button onClick={()=>{setisActive(true)}}>CHANGE STATUS</button>

    </div>
  )
}
