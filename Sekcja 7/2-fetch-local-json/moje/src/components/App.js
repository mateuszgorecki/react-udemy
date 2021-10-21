import React, { Component } from "react";
import Word from "./Word";
import "../styles/App.css";

class App extends Component {
  state = {
    words: [] /*żądanie AJAX*/,
    isLoaded: false,
  };

  componentDidMount() {
    fetch("data/words.json")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          words: data.words,
          isLoaded: true,
        });
      });
  }

  render() {
    console.log("render");
    const words = this.state.words.map((word) => (
      <Word key={word.id} eng={word.en} pl={word.pl} />
    ));
    return <ul>{this.state.isLoaded ? words : "wczytuje dane"}</ul>;
  }
}

export default App;
