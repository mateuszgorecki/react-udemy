class Form extends React.Component {
  state = {
    city: "Londyn",
    text: "",
    isLiked: true,
    number: "2",
  };

  cityChange = (e) => {
    this.setState({
      city: e.target.value,
    });
  };

  textChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  likedChange = () => {
    this.setState({
      isLiked: !this.state.isLiked,
    });
  };

  numberChange(e) {
    this.setState({
      number: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <label>
          Podaj miasto:
          <input
            value={this.state.city}
            onChange={this.cityChange}
            type="text"
          />
        </label>
        <br />
        <label>
          Napisz coś o tym mieście:
          <textarea value={this.state.text} onChange={this.textChange} />
        </label>
        <br />
        <label>
          Czy lubisz to miasto?
          <input
            type="checkbox"
            checked={this.state.isLiked}
            onChange={this.likedChange}
          />
        </label>
        <br />
        <label>
          Ile razy?
          <select
            value={this.state.number}
            onChange={this.numberChange.bind(this)}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="more">more</option>
          </select>
        </label>
      </div>
    );
  }
}

ReactDOM.render(<Form />, document.getElementById("root"));
