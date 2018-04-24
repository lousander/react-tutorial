import React, { Component } from "react";
import Comments from "./Comments";

class Article extends Component {
  state = {
    title: "",
    body: ""
  }

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/posts/1/").then(response => {
      response.json().then(data => {
        this.setState({
          title: data.title,
          body: data.body,
        })
      })
    })
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">{ this.state.title }</h1>
        </header>
        {this.state.body.split("\n").map(block => {
          return <p key={atob(block)}>{ block }</p>
        })}
        <Comments />
      </div>
    );
  }
}

export default Article;
