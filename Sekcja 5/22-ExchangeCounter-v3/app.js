const Cash = (props) => (
  <div>
    {props.title}
    {props.cash ? ((props.cash / props.ratio) * props.price).toFixed(2) : null}
  </div>
);

class ExchangeCantor extends React.Component {
  state = {
    amount: "",
    product: "electricity",
    // usdRatio: 3.9,
    // eurRatio: 4.6,
  };

  static defaultProps = {
    currencies: [
      {
        id: 0,
        name: "zloty",
        ratio: 1,
        title: "PLN: ",
      },
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
    ],
    prices: {
      electricity: 0.5,
      gas: 5.8,
      oranges: 3.79,
    },
  };

  handleChange = (e) => {
    this.setState({
      amount: e.target.value,
    });
  };

  handleSelect = (e) => {
    this.setState({
      product: e.target.value,
      amount: "",
    });
  };

  insertSuffix(select) {
    if (select === "electricity") return <em>kWh</em>;
    else if (select === "gas") return <em>litres</em>;
    else if (select === "oranges") return <em>kilos</em>;
  }

  selectPrice(select) {
    const price = this.props.prices[select];
    return price;
  }
  render() {
    const { amount, product } = this.state;
    const price = this.selectPrice(product);
    const calc = this.props.currencies.map((currency) => (
      <Cash
        key={currency.id}
        ratio={currency.ratio}
        title={currency.title}
        cash={amount}
        price={price}
      />
    ));
    return (
      <div className="app">
        <label>
          Produkt:
          <select value={this.state.product} onChange={this.handleSelect}>
            <option value="electricity">electricity</option>
            <option value="oranges">oranges</option>
            <option value="gas">gas</option>
          </select>
          <br />
        </label>
        <label>
          <input type="number" value={amount} onChange={this.handleChange} />
          {this.insertSuffix(this.state.product)}
        </label>
        {calc}
      </div>
    );
  }
}

ReactDOM.render(<ExchangeCantor />, document.getElementById("root"));
