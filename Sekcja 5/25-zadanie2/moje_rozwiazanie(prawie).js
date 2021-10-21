// *Wykorzystaj dwa komponenty: rodzica (o nazwie List) i dziecka (o nazwie Person)

const Person = (props) => {
  return (
    <li>
      <span>{props.name}</span>
      <button onClick={props.delete}>Usuń</button>
    </li>
  );
};

// const Person = (props) => {
//   return (
//     <li>
//       <span>{props.name}</span>
//       <button onClick={() => props.delete(props.id)}>Usuń</button>
//     </li>
//   );
// };

class List extends React.Component {
  state = {
    people: [
      { id: 10, name: "Jan K." },
      { id: 20, name: "Piotr C." },
      { id: 30, name: "Marysia W." },
      { id: 40, name: "John S." },
    ],
  };

  deleteYourself(id) {
    const people = [...this.state.people];
    const index = people.findIndex((person) => person.id === id);
    people.splice(index, 1);
    this.setState({
      people,
    });
  }

  // deleteYourself = (id) => {
  //   // let people = Array.from(this.state.people);
  //   let people = this.state.people.slice();
  //   people = people.filter((person) => id !== person.id);
  //   this.setState({
  //     people,
  //   });
  //   console.log(people);
  // };

  render() {
    const completeList = this.state.people.map((person) => (
      <Person
        key={person.id}
        name={person.name}
        delete={this.deleteYourself.bind(this, person.id)}
        // const completeList = this.state.people.map((person) => (
        //   <Person key={person.id} name={person.name} delete={this.deleteYourself}
      />
    ));
    return <ul>{completeList}</ul>;
  }
}

ReactDOM.render(<List />, document.getElementById("root"));
