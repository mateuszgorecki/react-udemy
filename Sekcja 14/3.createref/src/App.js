import React, { Component, createRef } from "react";
import Counter from "./Counter";

import "./App.css";

class App extends Component {
  state = {
    isCounterVisible: true,
  };
  paragraphElement = createRef();

  addChar = () => (this.paragraphElement.current.textContent += "!");

  toggleVisibilityCounter = () =>
    this.setState((prevState) => {
      return { isCounterVisible: !prevState.isCounterVisible };
    });

  render() {
    const counterElement = this.state.isCounterVisible ? <Counter /> : null;
    return (
      <div>
        <p ref={this.paragraphElement}>Hello</p>
        <button onClick={this.addChar}>Add '!'</button>
        <button onClick={this.toggleVisibilityCounter}>
          Pokaz/ukryj counter
        </button>
        {counterElement}
      </div>
    );
  }
}

export default App;
