import React from "react";
import './styles.css';

const Button = props => {
  return <button class="my-button" onClick={props.action}>{props.title}</button>;
};

export default Button;
