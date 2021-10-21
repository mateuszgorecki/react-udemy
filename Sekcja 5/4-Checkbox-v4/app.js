const ValidationMsg = (props) => {
  const { txt } = props;
  return <p>{txt}</p>;
};

const OrderForm = (props) => {
  const { submit, change, checked } = props;
  return (
    <form onSubmit={submit}>
      <input type="checkbox" id="age" onChange={change} checked={checked} />
      <label htmlFor="age">Mam co najmniej 16 lat</label>
      <br />
      <button type="submit">Kup bilet</button>
    </form>
  );
};

class TicketShop extends React.Component {
  state = {
    confirmed: false,
    submitted: false,
  };

  isConfirmed = () => {
    this.setState({
      confirmed: !this.state.confirmed,
      submitted: false,
    });
  };

  isChecked = (e) => {
    e.preventDefault(); //powstrzymaj działania domyślne
    if (!this.state.submitted) {
      this.setState({
        submitted: true,
      });
    }
  };

  showMessage = () => {
    if (this.state.submitted) {
      if (this.state.confirmed) return <ValidationMsg txt="Można" />;
      else return <ValidationMsg txt="Nie można" />;
    } else return null;
  };

  render() {
    const { confirmed, submitted } = this.state;
    return (
      <>
        <h1>Kup bilet na horror roku</h1>
        <OrderForm
          change={this.isConfirmed}
          submit={this.isChecked}
          checked={confirmed}
        />
        {this.showMessage()}
      </>
    );
  }
}

ReactDOM.render(<TicketShop />, document.getElementById("root"));
