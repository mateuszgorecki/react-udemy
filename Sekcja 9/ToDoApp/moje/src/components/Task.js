import React from "react";

const Task = (props) => {
  const importantTask = {
    color: "red",
  };
  const { id, text, date, active, important, finishDate } = props.task;

  if (active) {
    return (
      <div>
        <p>
          <strong style={important ? importantTask : null}>{text}</strong> -{" "}
          <span>{date} </span>
          <button onClick={() => props.status(id)}>Done</button>
          <button onClick={() => props.delete(id)}>X</button>
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <p>
          <strong>{text}</strong> <em>(zrobić do {date})</em>
          <br />
          <span>- potwierdzenie wykonania {finishDate}</span>
          <button onClick={() => props.delete(id)}>X</button>
        </p>
      </div>
    );
  }
};

export default Task;
