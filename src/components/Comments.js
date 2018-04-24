import React from "react"

const Comment = props => {
  return (
    <div className="App-comment">
      <p>{ props.user }</p>
      <p>{ props.content }</p>
    </div>
  )
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
