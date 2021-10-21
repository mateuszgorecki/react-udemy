class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
    console.log("metoda constructor");
  }

  UNSAFE_componentWillMount() {
    console.log("metoda will mount");
  }

  componentDidMount() {
    console.log("metoda didmount");
    this.setState({ number: 2 });
  }
  componentDidUpdate() {
    console.log("metoda update");
  }

  render() {
    console.log("metoda render");
    return (
      <>
        <p> lifecycle </p>
        <Child />
      </>
    );
  }
}

class Child extends React.Component {
  UNSAFE_componentWillMount() {
    console.log("metoda will mount w Child");
  }
  componentDidMount() {
    console.log(` metoda didMount w Child`);
  }
  render() {
    console.log(`-------------------------------
    render w Child`);
    return <h1>dziecko</h1>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
