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
          dangerouslySetInnerHTML={{
            __html: this.props.content.replace("\n", "<br>")
          }}
        />
        <button onClick={this.toggle}>Esconder comentário</button>
      </div>
    );
  }
}

class CommentBox extends React.Component {
  state = {
    text: ""
  };
  handleTextChange = event => {
    this.setState({
      text: event.target.value
    });
  };
  handleButtonClick = () => {
    this.props.onCommentAdd(this.state.text);
  };
  render() {
    return (
      <div>
        <input
          value={this.state.text}
          onChange={this.handleTextChange}
          type="text"
        />
        <button onClick={this.handleButtonClick}>Comentar</button>
      </div>
    );
  }
}

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

  handleCommentAdd = text => {
    const comments = this.state.comments.slice();
    const newComment = {
      id: Math.floor(Math.random() * 900 + 100),
      body: text,
      name: "foo"
    };
    comments.push(newComment);
    this.setState({
      comments
    });
  };

  render() {
    return (
      <div className="App-comments">
        <h2>Comentários</h2>
        <CommentBox onCommentAdd={this.handleCommentAdd} />
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
