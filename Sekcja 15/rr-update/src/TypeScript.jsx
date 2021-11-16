import React from "react";
import { useParams } from "react-router-dom";

const TypeScript = () => {
  const paramsObject = useParams();

  console.log(paramsObject);

  return (
    <div>
      <p>TypeScript</p>
    </div>
  );
};

export default TypeScript;
