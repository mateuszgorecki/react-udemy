class App extends React.Component {
  state = {
    available: 7,
    cart: 0,
  };
  subItem = () => {
    this.setState({
      cart: this.state.cart - 1,
    });
  };

  addItem = () => {
    this.setState({
      cart: this.state.cart + 1,
    });
  };

  render() {
    return (
      <>
        <button
          disabled={this.state.cart ? false : true}
          onClick={this.subItem}
        >
          -
        </button>
        <span>{this.state.cart}</span>
        <button
          disabled={this.state.cart >= this.state.available}
          onClick={this.addItem}
        >
          +
        </button>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
