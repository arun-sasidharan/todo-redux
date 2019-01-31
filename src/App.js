import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    items: []
  };
  addItems = () => {
    const getItem = document.getElementById('todo-item').value;
    const { items } = this.state;
    if (this.state.items.indexOf(getItem) === -1) items.push(getItem);
    this.setState({ items });
  };
  render() {
    return (
      <div>
        <div>
          <input type="text" id="todo-item" />
          <button onClick={this.addItems}>ADD</button>
        </div>
        <div>
          <ul>
            {this.state.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
