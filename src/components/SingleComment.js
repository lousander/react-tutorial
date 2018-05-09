import React from "react";

export default class Comment extends React.Component {
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
        <div className="comment_body">
          {this.props.content.split("\n").map((text, i) => {
            return <p key={i}>{text}</p>;
          })}
        </div>
        <button onClick={this.toggle}>Esconder comentário</button>
      </div>
    );
  }
}
