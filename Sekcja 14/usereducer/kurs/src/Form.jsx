import React, { useState } from 'react';

const Form = ({addHandler}) => {
  const [inputData, setInputData] = useState('');

  const handleOnChange = event => setInputData(event.target.value);

  const handleOnClick = () => {
    const course = {
      id: Math.floor(Math.random() * 1000),
      title: inputData,
    };

    addHandler({type: 'ADD', course});
    setInputData('');
  };

  return (
    <div>
      <input type="text" onChange={handleOnChange} value={inputData} />
      <button onClick={handleOnClick}>Dodaj kurs</button>
    </div>
  );
};

export default Form;