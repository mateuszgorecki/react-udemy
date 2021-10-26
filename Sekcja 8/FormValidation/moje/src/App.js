import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    username: "",
  };

  userChange = (e) => {
    console.log(e.target.type);
    console.log(e.target.name);
    this.setState({
      username: e.target.value,
    });
  };

  render() {
    return (
      <form>
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
          Email: <input type="email" id="email" />
        </label>
        <label htmlFor="password">
          Hasło: <input type="password" id="password" />
        </label>
        <label htmlFor="checkbox">
          <input type="checkbox" name="" id="checkbox" /> Akceptuje regulamin
        </label>
        <button>Wyślij formularz </button>
      </form>
    );
  }
}

export default App;
