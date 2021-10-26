import React, { Component } from "react";
import Form from "./From";
import Result from "./Result";
import "../styles/App.css";
const APIKey = "1141c3e1aa8845e58feea65ee43f2a23";
const addParams = "&units=metric&lang=pl";
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
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}${addParams}&appid=${APIKey}`;

    fetch(API)
      .then((res) => {
        if (res.ok) return res;
        throw Error("Something isnt yes");
      })
      .then((res) => res.json())
      .then((data) => {
        const time = new Date().toLocaleString();
        this.setState({
          err: false,
          date: time,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: data.main.temp,
          pressure: data.main.pressure,
          wind: data.wind.speed,
          city: data.name,
        });
      })
      .catch(() => {
        this.setState((prevState) => ({
          err: true,
          city: prevState.value,
        }));
      });
  };

  render() {
    const { city, err } = this.state;
    return (
      <div className="main-wrapper">
        <h1>Apka pogodowa</h1>
        <Form
          value={this.state.value}
          action={this.changeInput}
          submit={this.citySubmit}
        />
        {err ? (
          `Nie ma w bazie miejscowości ${city}`
        ) : city ? (
          <Result fetch={this.fetchData} weather={this.state} />
        ) : null}
      </div>
    );
  }
}

export default App;
