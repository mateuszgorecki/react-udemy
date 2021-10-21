import React from "react";

const SwitchButton = (props) => (
  <button onClick={props.click}>{props.active ? "Wyłącz" : "Włącz"}</button>
);

export default SwitchButton;
