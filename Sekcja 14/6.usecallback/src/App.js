import React, { useCallback, useState } from "react";

import Counter from "./Counter";

const App = () => {
  const [firstCounter, setFirstCounter] = useState(0);
  const [secondCounter, setSecondCounter] = useState(0);

  // * ta opcja lepsza bo nie trzeba robić re-renderu
  const increaseFirstCounter = useCallback(
    () => setFirstCounter((firstCounter) => firstCounter + 1),
    []
  );

  const increaseSecondCounter = useCallback(
    () => setSecondCounter(secondCounter + 1),
    [secondCounter]
  );

  const firstCounterComponent = (
    <Counter callback={increaseFirstCounter} index={1} />
  );
  const secondCounterComponent = (
    <Counter callback={increaseSecondCounter} index={2} />
  );

  return (
    <div className="App">
      <p>Licznik nr1 wynosi: {firstCounter}</p>
      <p>Licznik nr2 wynosi: {secondCounter}</p>
      {firstCounterComponent}
      {secondCounterComponent}
    </div>
  );
};

export default App;
