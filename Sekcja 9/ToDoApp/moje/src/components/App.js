import React, { Component } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import "../styles/App.css";

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        text: "zagrać wreszcie w Wiedźmina 3",
        date: "02/15/2018",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: "zrobić dobry uczynek",
        date: "11/12/2020",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        text: "pomalować dom po sylwestrze",
        date: "09/11/2019-09-11",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 3,
        text: "schudnąć 30 kilogramów",
        date: "05/20/2019",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 4,
        text: "sprzedać butelki po piwie (20 skrzynek)",
        date: "11/12/2020",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 5,
        text: "jeszcze raz pomalować dom",
        date: "09/11/2019",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 6,
        text: "fryzjer!!!",
        date: "05/20/2019",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 7,
        text: "nie odbierać poleconego od komornika",
        date: "11/12/2020",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 8,
        text: "kupić 2 butelki litrowe",
        date: "09/11/2019",
        important: false,
        active: true,
        finishDate: null,
      },
    ],
  };

  changeTaskStatus = (id) => {
    console.log("change status: " + id);
    let tasks = Array.from(this.state.tasks);
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().toLocaleString();
      }
    });
    this.setState({
      tasks,
    });
  };

  deleteTask = (id) => {
    // const tasks = [...this.state.tasks];
    // const index = tasks.findIndex((task) => task.id === id);
    // tasks.splice(index, 1);
    // this.setState({
    //   tasks,
    // });
    let tasks = [...this.state.tasks];
    tasks = tasks.filter((task) => task.id !== id);
    this.setState({
      tasks,
    });
  };

  render() {
    return (
      <div className="App">
        <AddTask />
        <TaskList
          tasks={this.state.tasks}
          status={this.changeTaskStatus}
          delete={this.deleteTask}
        />
      </div>
    );
  }
}

export default App;
