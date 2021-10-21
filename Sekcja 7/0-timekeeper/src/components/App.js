import React, { Component } from "react";
import "../App.css";
import SwitchButton from "./SwitchButton";
import Timer from "./Timer";

class App extends Component {
  state = {
    active: false,
    time: 0,
  };
  clickButton = () => {
    if (this.state.active) {
      clearInterval(this.idInterval);
    } else {
      this.idInterval = setInterval(() => this.addSecond(), 1000);
    }

    this.setState({
      active: !this.state.active,
    });
  };

  addSecond = () => {
    this.setState({
      time: this.state.time + 1,
    });
  };

  render() {
    const { active, time } = this.state;
    return (
      <div className="App">
        <Timer time={time} />
        <SwitchButton active={active} click={this.clickButton} />
      </div>
    );
  }
}

export default App;
