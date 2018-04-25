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
          <h1>Matérias: </h1>
          <ul className="article_list">
            {posts.map(post => {
              return (
                <li key={post.id}>
                  <Link to={`/${post.id}`}>
                    {post.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
    return <div>Loading...</div>;
  }
}
