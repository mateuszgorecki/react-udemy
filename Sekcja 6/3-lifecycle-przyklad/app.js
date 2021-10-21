class App extends React.Component {
  state = {
    status: true,
  };

  componentDidMount() {
    console.log("apka mount");
  }

  componentDidUpdate() {
    console.log("apka update");
  }
  render() {
    console.log("apka render");
    return (
      <div>
        <button
          onClick={() =>
            this.setState({
              status: !this.state.status,
            })
          }
        >
          Przełącz
        </button>
        <Child1 status={this.state.status} />
        {this.state.status && <Child2 />}
      </div>
    );
  }
}

class Child1 extends React.Component {
  componentDidMount() {
    console.log("Child1 mount");
  }
  componentDidUpdate() {
    console.log("Child1 update");
  }
  render() {
    console.log("Child1 render");
    return <div>{String(this.props.status)}</div>;
  }
}

class Child2 extends React.Component {
  componentDidMount() {
    console.log("Child2 mount");
  }
  componentDidUpdate() {
    console.log("Child2 update");
  }

  componentWillUnmount() {
    console.log("Child2 unmount");
  }
  render() {
    console.log("Child2 render");
    return <div>Komponent zamontowany</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
