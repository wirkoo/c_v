import React from "react";
import logo from "../images/logo.svg";
const Logo = () => {
  return (
    <>
      <div className="logo-container">
        <img className="logo" src={logo}></img>
        <p className="logo-name">Cricket Qila</p>
      </div>
    </>
  );
};

export default Logo;
