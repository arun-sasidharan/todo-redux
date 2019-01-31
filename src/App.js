import React, { Component } from 'react';
import './App.css';

//components

import Card from './components/card';

//constants
const active = 'active';
const deleted = 'deleted';
const done = 'done';
class App extends Component {
  getInitData = status => {
    if (localStorage.getItem('items')) {
      let items = localStorage.getItem('items');
      items = JSON.parse(items);
      return items[status];
    } else {
      return [];
    }
  };

  state = {
    items: {
      active: this.getInitData(active),
      deleted: this.getInitData(deleted),
      done: this.getInitData(done)
    }
  };

  addItems = () => {
    const ref = document.getElementById('todo-item');
    const getItem = ref.value;
    const { items } = this.state;
    ref.value = '';
    if (
      this.state.items.active.indexOf(getItem) === -1 &&
      getItem !== '' &&
      getItem !== ' '
    )
      items.active.push(getItem);
    this.setState({ items });
    localStorage.setItem('items', JSON.stringify(items));
  };

  moveItems = index => {
    const { items } = this.state;
    const deletedTask = items.active.splice(index, 1);
    items.deleted.push(deletedTask);
    this.setState({ items });
    localStorage.setItem('items', JSON.stringify(items));
  };

  completedTask = index => {
    const { items } = this.state;
    const completedItem = items.active.splice(index, 1);
    items.done.push(completedItem);
    this.setState({ items });
    localStorage.setItem('items', JSON.stringify(items));
  };

  render() {
    const activeTitle = 'active';
    const doneTitle = 'done';
    const deletedTitle = 'deleted';
    return (
      <div className="container">
        <div className="inputsHolder">
          <button onClick={this.addItems}>ADD</button>
          <input type="text" id="todo-item" placeholder="Enter new item" />
        </div>
        <div className="cardsContainer">
          <Card
            items={this.state.items.active}
            onCardAction={this.moveItems}
            onComplete={this.completedTask}
            title={activeTitle}
            bgColor={'#9C27B0'}
          />
          <Card
            items={this.state.items.done}
            onCardAction={this.moveItems}
            title={doneTitle}
            bgColor={'#8BC34A'}
          />
          <Card
            items={this.state.items.deleted}
            onCardAction={this.moveItems}
            title={deletedTitle}
            bgColor={'#E91E63'}
          />
        </div>
      </div>
    );
  }
}

export default App;
