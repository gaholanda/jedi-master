import React from "react";

const handleClick = () => console.log("click");

const Button = ({ className }) => (
  <button className={`btn ${className}`} onClick={handleClick}>
    choose your path again, Padawan
  </button>
);

export default Button;
