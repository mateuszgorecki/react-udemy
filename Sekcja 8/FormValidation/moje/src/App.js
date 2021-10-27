import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    checkbox: false,
  };

  userChange = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.type);
    const name = e.target.name;
    this.setState({
      [name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("dziala");
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} noValidate>
        <h1>Formularz</h1>
        <label htmlFor="user">
          Imię:{" "}
          <input
            type="text"
            id="user"
            name="username"
            value={this.state.username}
            onChange={this.userChange}
          />
        </label>
        <label htmlFor="email">
          Email:{" "}
          <input
            type="email"
            id="email"
            name="email"
            onChange={this.userChange}
          />
        </label>
        <label htmlFor="password">
          Hasło:{" "}
          <input
            type="password"
            id="password"
            name="password"
            onChange={this.userChange}
          />
        </label>
        <label htmlFor="checkbox">
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            onChange={this.userChange}
          />{" "}
          Akceptuje regulamin
        </label>
        <button>Wyślij formularz </button>
      </form>
    );
  }
}

export default App;
