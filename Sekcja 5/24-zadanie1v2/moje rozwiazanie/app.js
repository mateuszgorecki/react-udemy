//!Jeden komponent
//*wersja easy - zobacz wróżbę- losuje jedna z istniejących trzech wróżb
//?wersja medium- możliwość dodatnia wróżby do już istniejących

class App extends React.Component {
  state = {
    number: 0,
    text: "",
  };

  divinations = [
    {
      id: 1,
      title: "pierwsza wróżba",
    },
    {
      id: 2,
      title: "druga wróżba",
    },
    {
      id: 3,
      title: "trzecia wróżba",
    },
  ];

  numberChange = () => {
    // const min = Math.ceil(this.divinations[0].id);
    // const max = Math.ceil();
    const nbr = Math.ceil(Math.random() * this.divinations.at(-1).id);
    this.setState({
      number: nbr,
    });
  };
  addDivination = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  createDivination = () => {
    this.divinations.push({
      id: this.divinations.at(-1).id + 1,
      title: this.state.text,
    });
    this.setState({
      text: "",
    });
    if (this.state.text === "") return alert("wpisz coś");
    else
      return alert(
        `Wróżba dodana. Aktualne wróżby to ${this.divinations.map(
          (divination) => ` ${divination.title}`
        )}`
      );
  };
  render() {
    return (
      <>
        <input
          name="text"
          type="text"
          value={this.state.text}
          onChange={this.addDivination}
        />
        <button onClick={this.createDivination}>Dodaj wróżbę</button>
        <button onClick={this.numberChange}>Zobacz wróżbę</button>
        {this.divinations.map((divination) =>
          divination.id === <h1>this.state.number</h1> ? divination.title : null
        )}
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
