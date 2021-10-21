const data = {
  users: [
    {
      id: 1,
      age: 29,
      name: "Arek",
    },
    {
      id: 2,
      age: 49,
      name: "Marta",
    },
    {
      id: 3,
      age: 19,
      name: "Stasia",
    },
    {
      id: 4,
      age: 43,
      name: "Karol",
    },
  ],
};
const Item = ({ user }) => (
  <div>
    <h2>Użytkownik {user.name}</h2>
    <h3>Ma {user.age} lat</h3>
  </div>
);

class ListItems extends React.Component {
  // state = {
  //   items: ["jabłko", "śliwka", "gruszka"],
  // };

  render() {
    const users = this.props.data.users;
    const Items = users.map((user) => <Item user={user} key={user.id} />);
    return <ul>{Items}</ul>;
  }
}

ReactDOM.render(<ListItems data={data} />, document.getElementById("root"));
