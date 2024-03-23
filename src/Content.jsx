import React from 'react'
import { SubContent } from './SubContent';

export const Content = (props) => {

console.log("props in content....",props);
  return (
    <div>
        <h1 style={{color:"grey"}}>
            CONTENT COMPONENT
        </h1>
        <h2>{props.data.id}</h2>
        <h2>{props.data.name}</h2>

        <SubContent data = {props.data}></SubContent>
    </div>
  )
}
