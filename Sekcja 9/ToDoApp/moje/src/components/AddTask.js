import React, { Component } from "react";
import "../styles/AddTask.css";
class AddTask extends Component {
  minDate = new Date().toISOString().slice(0, 10);

  state = {
    text: "",
    date: this.minDate,
    checkbox: false,
  };
  handleInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const checked = e.target.checked;
    const type = e.target.type;

    if (type === "text" || type === "date") {
      this.setState({
        [name]: value,
      });
    } else if (type === "checkbox") {
      this.setState({
        [name]: checked,
      });
    }
  };

  handleClick = (e) => {
    e.preventDefault();
    const { text, date, checkbox } = this.state;
    if (text.length > 3) {
      const add = this.props.add(text, date, checkbox);
      if (add) {
        this.setState({
          text: "",
          date: this.minDate,
          checkbox: false,
        });
      }
    } else {
      console.log("za krótkie zadanie");
    }
  };

  render() {
    let maxDate = this.minDate.slice(0, 4) * 1 + 1;
    maxDate = `${maxDate}-12-31`;
    return (
      <div className="form">
        <form>
          <input
            type="text"
            placeholder="dodaj zadanie"
            value={this.state.text}
            onChange={this.handleInput}
            name="text"
          />
          <label htmlFor="checkbox">
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              checked={this.state.checkbox}
              onChange={this.handleInput}
            />{" "}
            Priorytet
          </label>
          <br />
          <label htmlFor="date">
            Do kiedy zrobić
            <input
              type="date"
              name="date"
              id="date"
              value={this.state.date}
              onChange={this.handleInput}
              min={this.minDate}
              max={maxDate}
            />
            <br />
            <button onClick={this.handleClick}>Dodaj</button>
          </label>
        </form>
        <hr />
      </div>
    );
  }
}

export default AddTask;
