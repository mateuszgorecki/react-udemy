import React, { useMemo, useState } from "react";

import Counter from "./Counter";

function App() {
  const [state, setState] = useState({ x: 0, y: 0 });
  // const [firstCounter, setFirstCounter] = useState(0);
  // const [secondCounter, setSecondCounter] = useState(0);

  const increaseX = () => setState({ ...state, x: state.x + 1 });
  const increaseY = () => setState({ ...state, y: state.y + 1 });

  // const increaseFirstCounter = () => setFirstCounter(firstCounter + 1);
  // const increaseSecondCounter = () => setSecondCounter(secondCounter + 1);

  const firstCounterComponent = useMemo(
    () => <Counter counter={state} index={1} />,
    [state]
  );

  return (
    <div className="App">
      <p>Licznik nr1 wynosi: {state.x}</p>
      <p>Licznik nr2 wynosi: {state.y}</p>
      {firstCounterComponent}
      {/* <Counter counter={state} index={1} /> */}
      <Counter counter={state} index={2} />
      <button onClick={increaseX}>Zwiększ licznik numer 1</button>
      <button onClick={increaseY}>Zwiększ licznik numer 2</button>
    </div>
  );
}

export default App;
