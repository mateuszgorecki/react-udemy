//destrukturyzacja
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
    const { cart, available } = this.state;
    return (
      <>
        <button disabled={cart ? false : true} onClick={this.subItem}>
          -
        </button>
        <span style={cart <= 0 ? { opacity: 0.3 } : null}>{cart}</span>
        <button disabled={cart >= available} onClick={this.addItem}>
          +
        </button>
        {this.state.cart > 0 && <button onClick={this.shopItem}>Kup</button>}
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
