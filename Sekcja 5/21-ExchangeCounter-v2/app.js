const Cash = (props) => (
  <div>
    {props.title}
    {props.cash ? (props.cash / props.ratio).toFixed(2) : null}
  </div>
);

class ExchangeCantor extends React.Component {
  state = {
    amount: "",
    // usdRatio: 3.9,
    // eurRatio: 4.6,
  };

  currencies = [
    {
      id: 1,
      name: "dollar",
      ratio: 3.9,
      title: "USD: ",
    },
    {
      id: 2,
      name: "euro",
      ratio: 4.6,
      title: "EUR: ",
    },
    {
      id: 3,
      name: "pound",
      ratio: 4.9,
      title: "GBP: ",
    },
  ];
  handleChange = (e) => {
    this.setState({
      amount: e.target.value,
    });
  };

  render() {
    const { amount } = this.state;

    const calc = this.currencies.map((currency) => (
      <Cash
        key={currency.id}
        ratio={currency.ratio}
        title={currency.title}
        cash={amount}
      />
    ));
    return (
      <div className="app">
        <label>
          <input type="number" value={amount} onChange={this.handleChange} />
        </label>
        {calc}
      </div>
    );
  }
}

ReactDOM.render(<ExchangeCantor />, document.getElementById("root"));
