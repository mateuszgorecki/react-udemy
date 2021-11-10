import React from "react";

const Counter = ({ counter, index }) => {
  console.log(`render licznika numer ${index}`);
  return (
    <div>
      Licznik nr {index} wynosi: {counter.x}
    </div>
  );
};

export default React.memo(Counter);
