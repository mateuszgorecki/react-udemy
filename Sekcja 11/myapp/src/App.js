import React, { Component } from "react";

class App extends Component {
  state = {
    active: false,
  };

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ active: !this.state.active })}>
          {this.state.active ? "Wyłącz" : "Włącz"}
        </button>
      </div>
    );
  }
}

export default App;
