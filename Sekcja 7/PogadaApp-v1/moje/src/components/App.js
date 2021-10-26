import React, { Component } from "react";
import Form from "./From";
import Result from "./Result";
import "../styles/App.css";

class App extends Component {
  state = {
    value: "",
    date: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    pressure: "",
    wind: "",
    err: "",
  };

  changeInput = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  citySubmit = (e) => {
    e.preventDefault();
    console.log("dziala");
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&units=metric&appid=1141c3e1aa8845e58feea65ee43f2a23`;

    fetch(API)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="main-wrapper">
        <h1>Apka pogodowa</h1>
        <Form
          value={this.state.value}
          action={this.changeInput}
          submit={this.citySubmit}
        />
        <Result />
      </div>
    );
  }
}

export default App;
