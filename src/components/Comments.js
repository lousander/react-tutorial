import React from "react";
import { connect } from "react-redux";
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
          this.props.dispatch({
            type: "POPULATE_COMMENTS",
            comments: data
          });
        });
      }
    );
  }

  handleCommentAdd = ({ name, body }) => {
    this.props.dispatch({
      type: "ADD_COMMENT",
      name,
      body
    });
  };

  onCommentToggle = id => {
    this.props.dispatch({
      type: "TOGGLE_VISIBILITY",
      id
    });
  };

  render() {
    return (
      <div className="comments">
        <h2>Comentários</h2>
        <CommentBox insertComment={this.handleCommentAdd} />
        {this.props.comments.map(comment => {
          return (
            <SingleComment
              teste={comment}
              key={comment.id}
              user={comment.name}
              content={comment.body}
              id={comment.id}
              hidden={comment.hidden}
              onCommentToggle={this.onCommentToggle}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comments
  };
};

export default connect(mapStateToProps)(Comments);
