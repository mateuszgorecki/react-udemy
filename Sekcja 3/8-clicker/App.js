//* aplikacja clicker
//przepływ danych

class Counter extends React.Component {
  state = {
    count: 0,
    result: this.props.result,
  };
  handleMathClick = (type, number = 1) => {
    // debugger;
    if (type === "sub") {
      this.setState((prevState) => ({
        count: prevState.count + 1,
        result: prevState.result - number,
      }));
    } else if (type === "add") {
      this.setState((prevState) => ({
        count: prevState.count + 1,
        result: prevState.result + number,
      }));
    } else if (type === "reset") {
      this.setState(() => ({
        count: 0,
        result: 0,
      }));
    } else console.log("nie działa");
  };

  render() {
    return (
      <>
        <MathButton
          name="-10"
          number={10}
          type="sub"
          click={this.handleMathClick}
        />
        <MathButton
          name="-1"
          number={1}
          type="sub"
          click={this.handleMathClick}
        />
        <MathButton name="reset" type="reset" click={this.handleMathClick} />
        <MathButton
          name="+1"
          number={1}
          type="add"
          click={this.handleMathClick}
        />
        <MathButton
          name="+10"
          number={10}
          type="add"
          click={this.handleMathClick}
        />
        <ShowResult
          name1="Wynik: "
          name2="Liczba kliknięć: "
          result={this.state.result}
          count={this.state.count}
        />
        <Click />
      </>
    );
  }
}
const MathButton = (props) => {
  return (
    <button onClick={() => props.click(props.type, props.number)}>
      {props.name}
    </button>
  );
};

const ShowResult = (props) => {
  return (
    <>
      <h1>
        {props.name1} {props.result}
      </h1>
      <h1>
        {props.name2} {props.count}{" "}
        {props.count > 10 ? <span>Przeciążenie!</span> : null}
      </h1>
    </>
  );
};

class Click extends React.Component {
  handleClick() {
    console.log(this);
  }
  handleClick = this.handleClick.bind(this);
  render() {
    return <input onChange={this.handleClick} />;
  }
}

ReactDOM.render(<Counter result={0} />, document.getElementById("root"));
