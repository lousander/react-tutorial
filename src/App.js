import React, { Component } from "react";
import "./App.css";

import Article from "./components/Article";

import { BrowserRouter, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" exact component={Article} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
