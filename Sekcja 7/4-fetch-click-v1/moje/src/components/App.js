import React, { Component } from "react";
import ButtonFetch from "./ButtonFetch";
import UsersList from "./UsersList";

const API = "https://randomuser.me/api/?results=5";

class App extends Component {
  state = {
    users: null,
  };

  dataFetch = () => {
    // console.log("click");
    fetch(API)
      .then((res) => {
        if (res.ok) {
          // console.log(res);
          return res;
        }
        throw Error(res.status);
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          users: data.results,
        });
      })
      .catch((error) => console.log(error));
  };
  render() {
    const { users } = this.state;
    return (
      <div>
        <ButtonFetch click={this.dataFetch} />
        {users ? <UsersList users={users} /> : users}
      </div>
    );
  }
}

export default App;
