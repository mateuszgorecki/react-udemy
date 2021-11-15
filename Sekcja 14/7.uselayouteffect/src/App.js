import React, { useState } from "react";

import Triangle from "./Triangle";

import "./style.css";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleOnClick = () => setIsVisible((prev) => !prev);
  const triangleComponent = isVisible ? <Triangle /> : null;

  return (
    <div>
      <button onClick={handleOnClick}>Toggle</button>
      {triangleComponent}
    </div>
  );
};

export default App;
