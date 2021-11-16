import React from "react";
import { useHistory } from "react-router-dom";

const Redux = () => {
  const history = useHistory();

  const handleOnClick = () => history.goBack();

  return (
    <div>
      <p>Redux</p>
      <button onClick={handleOnClick}>Back to prev page</button>
    </div>
  );
};

export default Redux;
