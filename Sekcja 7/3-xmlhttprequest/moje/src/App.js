import React, { Component } from "react";
import "./App.css";
class App extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    xhr.send();
    xhr.onload = () => {
      console.log(xhr.status);
      if (xhr.status === 200) {
        const users = JSON.parse(xhr.response);
        console.log(users);
        this.setState({ users });
      }
    };
  }

  render() {
    const users = this.state.users.map((user) => (
      <div key={user.id}>
        <p>
          <strong>{user.name}</strong>
        </p>
        <p>City: {user.address.city}</p>
        <p>Street: {user.address.street}</p>
      </div>
    ));
    return <div className="App">{users}</div>;
  }
}

export default App;
