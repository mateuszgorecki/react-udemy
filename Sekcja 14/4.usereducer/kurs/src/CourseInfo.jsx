import React from 'react';

const CourseInfo = ({id, onClickHandler, title}) => {
  const handleOnClick = () => onClickHandler({
    id,
    type: 'REMOVE',
  });

  return (
    <div>
      <p>{title}</p>
      <button onClick={handleOnClick}>Usun kurs</button>
    </div>
  );
};

export default CourseInfo;