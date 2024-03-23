import React from "react";
import "./style.css"

//<link rel ="" href="" />

export const Header = (props) => {
  console.log("props in header....",props);
  return (
    <div className= "header">
      <h1>Header</h1>
      <h2>{props.title}</h2>
      <h3>{props.copyright}</h3>
    </div>
  );
};
