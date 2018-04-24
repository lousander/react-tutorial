import React from "react";

export class Comment extends React.Component {
  state = {
    hidden: false
  }

  toggle = () => {
    this.setState({
      hidden: !this.state.hidden
    })
  }

  render() {
    if (this.state.hidden) {
      return <button onClick={this.toggle}>Mostrar comentário</button>
    }
    return (
      <div className="App-comment">
        <p className="Comment-User">{this.props.user}</p>
        <p className="Comment-Body">{this.props.content}</p>
        <button onClick={this.toggle}>Esconder comentário</button>
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
