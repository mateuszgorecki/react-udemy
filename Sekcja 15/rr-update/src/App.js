import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Content from "./Content";
import Header from "./Header";

import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Content />
      </Router>
    </div>
  );
}

export default App;
