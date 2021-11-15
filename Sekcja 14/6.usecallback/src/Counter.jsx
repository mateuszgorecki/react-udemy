import React from "react";

const Counter = ({ callback, index }) => {
  console.log(`render licznika numer ${index}`);
  return (
    <div>
      <button onClick={callback}> Zwiększ licznik {index}</button>
    </div>
  );
};

export default React.memo(Counter);
