import React, { Component } from "react";
import Form from "./From";
import Result from "./Result";
import "../styles/App.css";

class App extends Component {
  state = {
    value: "",
  };

  changeInput = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    return (
      <div className="main-wrapper">
        <h1>Apka pogodowa</h1>
        <Form value={this.state.value} action={this.changeInput} />
        <Result />
      </div>
    );
  }
}

export default App;
