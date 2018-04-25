import React, { Component } from "react";
import "./App.css";

import Article from "./components/Article";
import ArticleList from "./components/ArticleList";

import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/react-tutorial/" >
        <div className="App">
          <Route path="/" exact component={ArticleList} />
          <Route path="/:id" exact component={Article} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
