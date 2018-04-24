import React from "react";

class Comment extends React.Component {
  render() {
    return (
      <div className="App-comment">
        <p>{this.props.user}</p>
        <p>{this.props.content}</p>
        <a href="#" onClick={() => alert(1)}>Esconder comentário</a>
      </div>
    );
  }
}

const Comments = () => {
  return (
    <div className="App-comments">
      <h2>Comentários</h2>
      <Comment user="João" content="Que matéria legal!" />
      <Comment user="Maria" content="Que matéria chata!" />
      <Comment user="José" content="Concordo com os dois!" />
    </div>
  );
};

export default Comments;
