import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Lorem ipsum dolor sit amet</h1>
        </header>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
          accusantium totam maiores eius, sed vel nemo esse consequatur veniam
          aut voluptate cum asperiores dicta ipsum corporis! Odio earum fugit
          excepturi.
        </p>
        <p>
          Non repellendus et fugiat doloribus aliquid adipisci provident neque
          tempore natus sit? Rerum pariatur voluptatibus, quidem minus
          consectetur ab vel quos exercitationem corrupti facere neque ducimus.
          Dignissimos laudantium ducimus ipsam.
        </p>
        <p>
          Aliquam dignissimos id sunt quis neque autem, nam, labore eum animi
          nihil aut? Repellat illum delectus totam nulla? Possimus quasi
          molestias ullam totam omnis, perferendis modi cum similique. Esse,
          dignissimos.
        </p>
        <p>
          Minima dignissimos in hic accusamus, impedit voluptatibus molestias
          quam autem quo, facilis provident! Repellat rerum iste, deleniti
          maiores provident quaerat molestiae voluptatibus culpa suscipit
          debitis quis ipsa consequatur ab sint!
        </p>
        <p>
          Voluptatibus numquam velit esse explicabo culpa, deleniti nam ullam
          dignissimos soluta maiores! Sequi accusantium consequatur numquam.
          Veniam consequatur quisquam, atque quaerat expedita, eos possimus nisi
          reprehenderit similique facilis architecto fugit?
        </p>
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
      </div>
    );
  }
}

export default App;
