import "../styles/App.css";
import React, { Component } from "react";
import Form from "./From";
import Result from "./Result";

class App extends Component {
  render() {
    return (
      <div>
        <Form />
        <Result />
      </div>
    );
  }
}

export default App;
