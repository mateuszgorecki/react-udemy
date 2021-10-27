import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    checkbox: false,

    errors: {
      username: false,
      email: false,
      password: false,
      checkbox: false,
    },
  };

  messages = {
    username_incorrect:
      "Nazwa musi być dłuższa niż 10 znaków i nie może zawierać spacji",
    email_incorrect: "Email musi zawierać @",
    password_incorrect: "Hasło musi mieć 8 znaków",
    checkbox_incorrect: "Regulamin musi być zaakceptowany",
  };

  userChange = (e) => {
    // console.log(e.target.value);
    const type = e.target.type;
    const value = e.target.value;
    const name = e.target.name;
    const checked = e.target.checked;
    if (type === "text" || type === "email" || type === "password") {
      this.setState({
        [name]: value,
      });
    } else if (type === "checkbox") {
      this.setState({
        [name]: checked,
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const validation = this.formValidation();
    if (validation.correct) {
      this.setState({
        username: "",
        email: "",
        password: "",
        checkbox: false,
        message: "Formularz został wysłany",

        errors: {
          username: false,
          email: false,
          password: false,
          checkbox: false,
        },
      });
    } else {
      this.setState({
        errors: {
          username: !validation.username,
          email: !validation.email,
          password: !validation.password,
          checkbox: !validation.checkbox,
        },
      });
    }
  };

  formValidation = () => {
    let username = false;
    let email = false;
    let password = false;
    let checkbox = false;
    let correct = false;

    if (
      this.state.username.length >= 10 &&
      this.state.username.indexOf(" ") === -1
    ) {
      username = true;
    }

    if (this.state.email.indexOf("@") !== -1) {
      email = true;
    }

    if (this.state.password.length === 8) {
      password = true;
    }

    if (this.state.checkbox) {
      checkbox = true;
    }

    if (username && email && password & checkbox) {
      correct = true;
    }

    return {
      correct,
      username,
      email,
      password,
      checkbox,
    };
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.message !== "") {
      setTimeout(() => {
        this.setState({
          message: "",
        });
      }, 3000);
    }
  }

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
        {this.state.errors.username && (
          <span>{this.messages.username_incorrect}</span>
        )}

        <label htmlFor="email">
          Email:{" "}
          <input
            type="email"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.userChange}
          />
        </label>
        {this.state.errors.email && (
          <span>{this.messages.email_incorrect}</span>
        )}

        <label htmlFor="password">
          Hasło:{" "}
          <input
            type="password"
            id="password"
            name="password"
            value={this.state.password}
            onChange={this.userChange}
          />
        </label>
        {this.state.errors.password && (
          <span>{this.messages.password_incorrect}</span>
        )}

        <label htmlFor="checkbox">
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            checked={this.state.checkbox}
            onChange={this.userChange}
          />{" "}
          Akceptuje regulamin
        </label>
        {this.state.errors.checkbox && (
          <span>{this.messages.checkbox_incorrect}</span>
        )}

        <button>Wyślij formularz </button>
        {this.state.message && <h3>{this.state.message}</h3>}
      </form>
    );
  }
}

export default App;
