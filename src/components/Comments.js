import React from "react"

const Comments = () => {
  return (
    <div className="App-comments">
      <h2>Comentários</h2>
      <div className="App-comment">
        <p>João</p>
        <p>Que matéria legal!</p>
      </div>
      <div className="App-comment">
        <p>Maria</p>
        <p>Que matéria chata!</p>
      </div>
      <div className="App-comment">
        <p>José</p>
        <p>Concordo com os dois!</p>
      </div>
    </div>
  );
};

export default Comments;
