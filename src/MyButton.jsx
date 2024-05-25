import React from 'react'

export const MyButton = (props) => {
  return (
    <button className={props.className} onClick={props.onClick}>{props.name}</button>
  )
}
