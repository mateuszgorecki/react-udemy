import React from "react";
import Task from "./Task";

const TaskList = (props) => {
  const tasks = props.tasks.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      status={props.status}
    />
  ));
  return (
    <>
      <div className="active">
        <h2>Zadania do zrobienia</h2>
        {tasks}
      </div>
      <hr />
      <div className="done">
        <h2>Zadania zrobione (0)</h2>
      </div>
    </>
  );
};

export default TaskList;
