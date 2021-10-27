import React from "react";
import Task from "./Task";

const TaskList = (props) => {
  const active = props.tasks.filter((task) => task.active);
  const done = props.tasks.filter((task) => !task.active);

  const activeTasks = active.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      status={props.status}
    />
  ));

  const doneTasks = done.map((task) => (
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
        {activeTasks.length > 0 ? activeTasks : <p>Brak zadań</p>}
      </div>
      <hr />
      <div className="done">
        <h2>
          Zadania zrobione <em>({done.length})</em>
        </h2>
        {doneTasks.length > 5 && (
          <span>wyświetlone jest ostatnich 5 tasków</span>
        )}
        {doneTasks.slice(0, 5)}
      </div>
    </>
  );
};

export default TaskList;
