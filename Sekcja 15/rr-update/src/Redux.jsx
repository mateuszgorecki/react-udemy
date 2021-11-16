import React from "react";
import { useHistory, useLocation } from "react-router-dom";

const Redux = () => {
  const history = useHistory();
  const location = useLocation();

  const handleOnClick = () => history.goBack();

  const isActive = Boolean(location.state && location.state.isActive);

  return (
    <div>
      <p>Redux</p>
      <p>Informacja {String(isActive)}</p>
      <button onClick={handleOnClick}>Back to prev page</button>
    </div>
  );
};

export default Redux;
