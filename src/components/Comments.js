import React from "react";

class Comment extends React.Component {
  state = {
    hidden: false
  }

  hide = () => {
    this.setState({
      hidden: true
    })
  }

  show = () => {
    this.setState({
      hidden: false
    })
  }

  render() {
    if (this.state.hidden) {
      return <button onClick={this.show}>Mostrar comentário</button>
    }
    return (
      <div className="App-comment">
        <p>{this.props.user}</p>
        <p>{this.props.content}</p>
        <button onClick={this.hide}>Esconder comentário</button>
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
