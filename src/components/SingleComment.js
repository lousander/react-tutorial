import React from "react";
import PropTypes from "prop-types";

export default function Comment(props) {
  const toggle = () => props.onCommentToggle(props.id);
  if (props.hidden) {
    return (
      <div className="comment">
        <button onClick={toggle}>Mostrar comentário</button>
      </div>
    );
  }
  return (
    <div className="comment">
      <p className="comment_user">{props.user}</p>
      <div className="comment_body">
        {props.content.split("\n").map((text, i) => {
          return <p key={i}>{text}</p>;
        })}
      </div>
      <button onClick={toggle}>Esconder comentário</button>
    </div>
  );
}

Comment.propTypes = {
  content: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired
};
