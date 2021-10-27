import React from "react";

const Task = (props) => {
  const { id, text, date, important, active, finishDate } = props.task;
  return (
    <div>
      <p>
        <strong>{text}</strong> - <span>{date} </span>
        <button onClick={() => props.status(id)}>Done</button>
        <button onClick={() => props.delete(id)}>X</button>
      </p>
    </div>
  );
};

export default Task;
