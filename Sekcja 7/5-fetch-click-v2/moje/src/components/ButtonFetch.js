import React from "react";

const ButtonFetch = (props) => {
  return (
    <button
      style={{
        padding: "10px 20px",
        borderRadius: "5px",
        border: "2px solid black",
        backgroundColor: "white",
        margin: "10px 40px",
        cursor: "pointer",
      }}
      onClick={props.click}
    >
      Dodaj usera
    </button>
  );
};

export default ButtonFetch;
