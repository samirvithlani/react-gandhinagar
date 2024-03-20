import React from "react";

export default function Footer() {

    const footerStyle = {
        position: "fixed",
        height: "80px",
        bottom: "0",
        width: "100%",
        backgroundColor: "yellow",
    }


  return (
    <div style={footerStyle}>
      <h1>Footer </h1>
    </div>
  );
}
