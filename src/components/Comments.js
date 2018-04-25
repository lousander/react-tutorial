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
      return (
        <div className="comment">
          <button onClick={this.toggle}>Mostrar comentário</button>
        </div>
      );
    }
    return (
      <div className="comment">
        <p className="comment_user">{this.props.user}</p>
        {/* XSS WARNING!!! */}
        <p
          className="comment_body"
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
    text: "",
    user: ""
  };

  handleTextChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  handleUserChange = event => {
    this.setState({
      user: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { text, user } = this.state;
    this.props.onCommentAdd({ text, user });
  };

  render() {
    return (
      <div className="new_comment">
        <form action="" onSubmit={this.handleSubmit}>
          <h3>Adicionar novo comentário:</h3>
          <p>Seu nome</p>
          <input
            value={this.state.user}
            onChange={this.handleUserChange}
            className="user_input"
            type="text"
          />
          <p>Sua mensagem</p>
          <textarea
            value={this.state.text}
            onChange={this.handleTextChange}
            className="comment_box"
          />
          <button onClick={this.handleSubmit}>Comentar</button>
        </form>
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

  handleCommentAdd = ({ user, text }) => {
    const comments = this.state.comments.slice();
    const newComment = [
      {
        id: Math.floor(Math.random() * 900 + 100),
        body: text,
        name: user
      }
    ];
    this.setState({
      comments: newComment.concat(comments)
    });
  };

  render() {
    return (
      <div className="comments">
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
