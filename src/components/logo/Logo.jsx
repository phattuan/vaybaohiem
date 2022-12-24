/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/logo.png";


const Logo = () => {
  return (
    <>
      <div className="logo">
        {/* <span style={styleTextP}>P</span>
        <span style={styleTextF}>F</span>
        <span style={styleTextP2}>P</span> */}
        <img src={logo}></img>
      </div>
    </>
  );
};

export default Logo;
