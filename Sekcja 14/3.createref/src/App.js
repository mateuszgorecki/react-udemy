import React, { Component, createRef } from "react";

import "./App.css";

class App extends Component {
  textInput = createRef();
  paragraphElement = createRef();

  focusTextInput = () => this.textInput.current.focus();
  addChar = () => (this.paragraphElement.current.textContent += "!");

  render() {
    return (
      <div>
        <input ref={this.textInput} type="text" />
        <p ref={this.paragraphElement}>Hello</p>
        <button onClick={this.focusTextInput}>Focus na input</button>
        <button onClick={this.addChar}>Add '!'</button>
      </div>
    );
  }
}

export default App;
