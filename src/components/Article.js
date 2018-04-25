import React, { Component } from "react";
import Comments from "./Comments";

class Article extends Component {
  state = {
    title: "",
    body: ""
  };

  componentDidMount() {
    fetch(
      `http://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}/`
    ).then(response => {
      response.json().then(data => {
        this.setState({
          title: data.title,
          body: data.body
        });
      });
    });
  }

  render() {
    return (
      <div>
        <header className="header">
          <h1 className="title">{this.state.title}</h1>
        </header>
        {this.state.body.split("\n").map((block, index) => {
          return <p key={index}>{block}</p>;
        })}
        <Comments />
      </div>
    );
  }
}

export default Article;
