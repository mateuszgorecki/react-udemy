import React from "react";
import { useHistory } from "react-router-dom";

const ReactJS = () => {
  const history = useHistory();

  const handleOnClick = () => {
    const location = {
      pathname: "/redux",
      state: {
        isActive: true,
      },
    };

    history.push(location);
  };

  return (
    <div>
      <p>ReactJS</p>
      <button onClick={handleOnClick}>Go to redux</button>
    </div>
  );
};

export default ReactJS;
