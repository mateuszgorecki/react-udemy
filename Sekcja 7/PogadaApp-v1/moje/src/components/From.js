import React from "react";

const Form = (props) => {
  return (
    <div>
      <form>
        <input
          type="text"
          value={props.value}
          placeholder="wpisz miasto"
          onChange={props.action}
        />
        <button>Search city</button>
      </form>
    </div>
  );
};

export default Form;
