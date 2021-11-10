import React, { createRef, useEffect, useRef, useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const textInputRef = useRef(true);
  const numberInputRef = createRef();

  const focusOnInput = () => textInputRef.current.focus();
  const increaseCounter = () => setCounter(counter + 1);

  //jeśli input ma być na focusie od pierwszego renderu
  useEffect(() => {
    textInputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={textInputRef} type="text" />
      <input ref={numberInputRef} type="number" />
      <button onClick={focusOnInput}>Focus na input</button>
      <button onClick={increaseCounter}>Rerender</button>
    </div>
  );
};

export default App;
