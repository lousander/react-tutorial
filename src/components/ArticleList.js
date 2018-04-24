import React from "react";
import { Link } from "react-router-dom";

export default class ArticleList extends React.Component {
  state = {
    posts: []
  };
  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/posts`).then(response => {
      response.json().then(data => {
        this.setState({
          posts: data
        });
      });
    });
  }
  render() {
    const { posts } = this.state;
    if (posts.length > 0) {
      return (
        <div>
          <ul>
            {posts.map(post => {
              return (
                <Link key={post.id} to={`/${post.id}`}>
                  <li>{post.title}</li>
                </Link>
              );
            })}
          </ul>
        </div>
      );
    }
    return <div>Loading...</div>;
  }
}
