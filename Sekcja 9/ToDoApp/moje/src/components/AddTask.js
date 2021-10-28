import React, { Component } from "react";
import "../styles/AddTask.css";
class AddTask extends Component {
  state = {
    text: "",
    date: "",
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
      console.log("cokolwiek");
    } else if (type === "checkbox") {
      this.setState({
        [name]: checked,
      });
    }
  };

  render() {
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
              checked={this.state.checked}
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
              min="2021-11-01"
              max="2022-12-01"
            />
            <br />
            <button type="submit">Dodaj</button>
          </label>
        </form>
        <hr />
      </div>
    );
  }
}

export default AddTask;
