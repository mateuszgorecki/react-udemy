const data = {
  users: [
    {
      id: 1,
      age: 29,
      name: "Arek",
      sex: "male",
    },
    {
      id: 2,
      age: 49,
      name: "Marta",
      sex: "female",
    },
    {
      id: 3,
      age: 19,
      name: "Stasia",
      sex: "female",
    },
    {
      id: 4,
      age: 43,
      name: "Karol",
      sex: "male",
    },
  ],
};
const Item = ({ user }) => (
  <div className="userInfo">
    <h3>{user.name}</h3>
    <p>Informacje o użytkowniku</p>
    <p>Wiek użytkownika: {user.age} lat</p>
    <p>Płeć użytkownika: {user.sex}</p>
  </div>
);

const isMale = (users) => {
  users.sex === "male" ? user : null;
};

class ListItems extends React.Component {
  state = {
    select: "all",
  };

  usersFilter(option) {
    this.setState({
      select: option,
    });
  }

  usersList = () => {
    let users = this.props.data.users;
    switch (this.state.select) {
      case "all":
        return users.map((user) => <Item user={user} key={user.id} />);
      case "male":
        users = users.filter((user) => user.sex === "male");
        return users.map((user) => <Item user={user} key={user.id} />);
      case "female":
        users = users.filter((user) => user.sex === "female");
        return users.map((user) => <Item user={user} key={user.id} />);
      default:
        return "brak danych";
    }
  };

  render() {
    return (
      <>
        <button onClick={this.usersFilter.bind(this, "male")}>
          Pokaż mężczyzn
        </button>
        <button onClick={this.usersFilter.bind(this, "female")}>
          Pokaż kobiety
        </button>
        <button onClick={this.usersFilter.bind(this, "all")}>
          Pokaż wszystkich
        </button>
        {this.usersList()}
      </>
    );
  }
}

ReactDOM.render(<ListItems data={data} />, document.getElementById("root"));
