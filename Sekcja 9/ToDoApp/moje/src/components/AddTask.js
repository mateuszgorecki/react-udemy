import React, { Component } from "react";
import "../styles/AddTask.css";
class AddTask extends Component {
  render() {
    return (
      <div className="form">
        <form>
          <input type="text" placeholder="dodaj zadanie" />
          <label htmlFor="checkbox">
            <input type="checkbox" name="checkbox" id="checkbox" /> Priorytet
          </label>
          <br />
          <label htmlFor="date">
            Do kiedy zrobić
            <input type="date" name="date" id="date" />
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
