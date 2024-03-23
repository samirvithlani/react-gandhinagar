import React from "react";

export default function Footer({copy}) {

    const footerStyle = {
        position: "fixed",
        height: "80px",
        bottom: "0",
        width: "100%",
        backgroundColor: "yellow",
    }


  return (
    <div style={footerStyle}>
      <h1>Footer  {copy}</h1>
      
    </div>
  );
}
