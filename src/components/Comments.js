import React from "react";
import CommentBox from "./CommentBox";

import SingleComment from "./SingleComment";

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

  handleCommentAdd = ({ name, body }) => {
    const comments = this.state.comments.slice();
    const newComment = [
      {
        id: Math.floor(Math.random() * 900 + 100),
        body,
        name,
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
        <CommentBox insertComment={this.handleCommentAdd} />
        {this.state.comments.map(comment => {
          return (
            <SingleComment
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
