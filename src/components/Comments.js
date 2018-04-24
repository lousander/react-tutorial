import React from "react";

export class Comment extends React.Component {
  state = {
    hidden: false
  };

  toggle = () => {
    this.setState({
      hidden: !this.state.hidden
    });
  };

  render() {
    if (this.state.hidden) {
      return <button onClick={this.toggle}>Mostrar comentário</button>;
    }
    return (
      <div className="App-comment">
        <p className="Comment-User">{this.props.user}</p>
        {/* XSS WARNING!!! */}
        <p
          className="Comment-Body"
          dangerouslySetInnerHTML={{__html: this.props.content.replace("\n", "<br>")}}
        />
        <button onClick={this.toggle}>Esconder comentário</button>
      </div>
    );
  }
}

// http://jsonplaceholder.typicode.com/comments?postId=1

class Comments extends React.Component {
  state = {
    comments: []
  };
  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/comments?postId=1").then(
      response => {
        response.json().then(data => {
          this.setState({
            comments: data
          });
        });
      }
    );
  }
  render() {
    return (
      <div className="App-comments">
        <h2>Comentários</h2>
        {this.state.comments.map(comment => {
          return (
            <Comment
              teste={comment}
              key={comment.id}
              user={comment.name}
              content={comment.body}
            />
          );
        })}
      </div>
    );
  }
}

export default Comments;
