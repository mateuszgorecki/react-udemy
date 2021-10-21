const PositiveMsg = () => <p>Możesz obejrzeć film.</p>;
const NegativeMsg = () => <p>Nie możesz obejrzeć filmu.</p>;
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

  render() {
    return (
      <>
        <h1>Kup bilet na horror roku</h1>
        <form onSubmit={this.isChecked}>
          <input
            type="checkbox"
            id="age"
            onChange={this.isConfirmed}
            checked={this.state.confirmed}
          />
          <label htmlFor="age">Mam co najmniej 16 lat</label>
          <br />
          <button type="submit">Kup bilet</button>
        </form>
        {this.state.submitted ? (
          this.state.confirmed ? (
            <PositiveMsg />
          ) : (
            <NegativeMsg />
          )
        ) : null}
      </>
    );
  }
}

ReactDOM.render(<TicketShop />, document.getElementById("root"));
