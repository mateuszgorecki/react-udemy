import React, { Component } from "react";
import ButtonFetch from "./ButtonFetch";
import UsersList from "./UsersList";

const API = "https://randomuser.me/api/?results=1";

class App extends Component {
  state = {
    users: [],
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
        const user = data.results;
        this.setState((prevState) => ({
          users: prevState.users.concat(user),
        }));
      })
      .catch((error) => console.log(error));
  };
  render() {
    const { users } = this.state;
    return (
      <div>
        <ButtonFetch click={this.dataFetch} />
        {users.length > 0 ? <UsersList users={users} /> : users}
      </div>
    );
  }
}

export default App;
