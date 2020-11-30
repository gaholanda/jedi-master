import React from "react";
import { useDispatch } from "react-redux";

function Button({ className, disabled }) {
  const dispatch = useDispatch();
  const handleClick = () => dispatch({ type: "REQUEST_MASTER" });

  return (
    <button
      disabled={disabled}
      className={`btn ${className}`}
      onClick={handleClick}
    >
      choose your path again, Padawan
    </button>
  );
}

export default Button;
