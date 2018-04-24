import React, { Component } from "react";
import "./App.css";

import Comments from  "./components/Comments";
import Article from  "./components/Article";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Article />
        <Comments />
      </div>
    );
  }
}

export default App;
