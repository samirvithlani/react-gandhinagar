import React from 'react'

export const SubContent = (props) => {
    console.log("props in subcontent....",props);
  return (
    <div>
        <h1 style={{color:"blue"}}>
            SUB CONTENT COMPONENT
        </h1>
        <h4>ID IN SUB CONTENTA {props.data.id}</h4>
    </div>
  )
}
