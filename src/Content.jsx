import React from 'react'
import { SubContent } from './SubContent';

export const Content = (props) => {


  const users = [
    {
      id:1,
      name:"amit",
      age:23
    },
    {
      id:2,
      name:"raj",
      age:24
    }
  ]



console.log("props in content....",props);
  return (
    <div>
        <h1 style={{color:"grey"}}>
            CONTENT COMPONENT
        </h1>
        <h2>{props.data.id}</h2>
        <h2>{props.data.name}</h2>
        {
          users.map((user)=>{
            return(
            <ul>
              <li>{user.id}</li>
              <li>{user.name}</li>
              <li>{user.age}</li>
            </ul>
            )
          })
        }




        <SubContent data = {props.data}></SubContent>
    </div>
  )
}
