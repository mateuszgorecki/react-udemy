import { useState } from 'react';

import { useCommentsStore } from './stores/hooks';

const Form = () => {
  const [inputData, setInputData] = useState('');
  const { addComment } = useCommentsStore(); 

  const handleOnChange = event => setInputData(event.target.value);

  const handleOnSubmit = event => {
    event.preventDefault();

    const comment = {
      id: Date.now(),
      comment: inputData,
    };

    addComment(comment);
    setInputData('');
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <label>
        Wpisz komentarz:
        <input
          onChange={handleOnChange}
          type="text"
          value={inputData}
        />
      </label>
    </form>
  );
};

export default Form;