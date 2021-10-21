class Clicker extends React.Component {
  state = {
    number1: 0,
    number2: 0,
    number3: 0,
  };

  clickUpdate1 = () => {
    this.setState({
      number1: this.state.number1 + 1,
    });
    // console.log("w metodzie", this.state.number1);
  };

  clickUpdate2 = () => {
    this.setState({
      number2: this.state.number2 + 1,
    });
    this.setState({
      number2: this.state.number2 + 1,
    });
  };

  clickUpdate3 = () => {
    this.setState(() => ({
      number3: this.state.number3 + 1,
    }));
    this.setState((prevState) => ({
      number3: prevState.number3 + 1,
    }));
    this.setState((prevState) => ({
      number3: prevState.number3 + 1,
    }));
  };

  render() {
    // console.log("w render", this.state.number1);
    return (
      <div>
        <button onClick={this.clickUpdate1}>Podbij o 1</button>
        <h1>{this.state.number1}</h1>
        <button onClick={this.clickUpdate2}>Podbij o 2</button>
        <h1>{this.state.number2}</h1>
        <button onClick={this.clickUpdate3}>Podbij o 3</button>
        <h1>{this.state.number3}</h1>
      </div>
    );
  }
}

ReactDOM.render(<Clicker />, document.getElementById("root"));
