import React from "react";
import "./styles.css";

const Button2 = props => {
  return (
    <button className="my-button2" onClick={props.action}>
      {props.title}
    </button>
  );
};

export default Button2;
