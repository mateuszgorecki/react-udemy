const PositiveMsg = () => <p>Możesz obejrzeć film.</p>;
const NegativeMsg = () => <p>Nie możesz obejrzeć filmu.</p>;
class CheckboxAge extends React.Component {
  state = {
    checked: false,
  };

  isChecked = () => {
    this.setState({
      checked: !this.state.checked,
    });
  };

  render() {
    return (
      <>
        <h1>Kup bilet na horror roku</h1>
        <input
          type="checkbox"
          name=""
          id="age"
          onChange={this.isChecked}
          checked={this.state.checked}
        />
        <label htmlFor="age">Mam co najmniej 16 lat</label>
        {this.state.checked ? <PositiveMsg /> : <NegativeMsg />}
      </>
    );
  }
}

ReactDOM.render(<CheckboxAge />, document.getElementById("root"));
