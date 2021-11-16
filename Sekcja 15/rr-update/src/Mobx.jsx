import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const MobX = () => {
  const [inputData, setInputData] = useState("");
  const history = useHistory();
  const handleOnChange = (e) => setInputData(e.target.value);

  const handleOnClick = () => {
    const location = {
      pathname: `/typescript/${inputData}`,
    };

    history.push(location);
  };

  return (
    <div>
      <p>MobX</p>
      <input onChange={handleOnChange} type="text" value={inputData} />
      <button onClick={handleOnClick}>Sent params to TS</button>
    </div>
  );
};

export default MobX;
