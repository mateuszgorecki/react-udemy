// const Dollars = (props) => (
//   <div>
//     EUR:
//     {props.cash ? (props.cash / props.ratio).toFixed(2) : null}
//   </div>
// );

// const Euros = (props) => (
//   <div>
//     USD:
//     {props.cash ? (props.cash / props.ratio).toFixed(2) : null}
//   </div>
// );
const Cash = (props) => (
  <div>
    {props.title}
    {props.cash ? (props.cash / props.ratio).toFixed(2) : null}
  </div>
);

class ExchangeCantor extends React.Component {
  state = {
    amount: "",
    usdRatio: 3.9,
    eurRatio: 4.6,
  };

  handleChange = (e) => {
    this.setState({
      amount: e.target.value,
    });
  };

  render() {
    const { amount, usdRatio, eurRatio } = this.state;
    return (
      <div className="app">
        <label>
          <input type="number" value={amount} onChange={this.handleChange} />
        </label>
        <Cash cash={amount} ratio={usdRatio} title="USD: " />
        <Cash cash={amount} ratio={eurRatio} title="EUR: " />
      </div>
    );
  }
}

ReactDOM.render(<ExchangeCantor />, document.getElementById("root"));
