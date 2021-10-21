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
    fetch(API).then((res) => {
      console.log(res);
    });
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
