//wyszarzenie 0 w spanie
class App extends React.Component {
  state = {
    available: 7,
    cart: 1,
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
  shopItem = () => {
    this.setState({
      available: this.state.available - this.state.cart,
      cart: 0,
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
        <span style={this.state.cart <= 0 ? { opacity: 0.3 } : null}>
          {this.state.cart}
        </span>
        <button
          disabled={this.state.cart >= this.state.available}
          onClick={this.addItem}
        >
          +
        </button>
        {this.state.cart > 0 && <button onClick={this.shopItem}>Kup</button>}
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
