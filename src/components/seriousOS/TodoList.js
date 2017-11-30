import React, { Component } from 'react';
import { ListGroup, ListGroupItem} from 'reactstrap';
import Draggable from 'react-draggable';

import './todolist.css';

class MailApp extends Component {
  constructor (props) {
    super(props);
    this.state = { items: [
      { name: "Project Room Lock", done: true },
      { name: "Faculty picture puzzle", done: false },
      { name: "Hangman (clown)", done: false },
    ] };
  }

  handleTodoItemClick = (i) => {
    const thisItem = this.state.items[i];
    const newItem = { ...thisItem, done: !thisItem.done };
    const items = Object.assign([], this.state.items, {[i]: newItem});
    this.setState({ ...this.state, items });
  }

  renderItems () {
    return this.state.items.map((todoItem, i) => (
      <ListGroupItem style={{ backgroundColor: "yellow" }} key={i}>
        <label>
          <input type="checkbox" checked={todoItem.done} onChange={() => this.handleTodoItemClick(i)}/>{ '  ' }
          {todoItem.name}
        </label>
      </ListGroupItem>
    ));
  }

  render () {
    return (
      <Draggable defaultPosition={{ x: -100, y: -200 }}>
        <div className="todo-list">
          <div className="todo-title-bg">Todo</div>
          <ListGroup>
            { this.renderItems() }
          </ListGroup>
        </div>
      </Draggable>
    );
  }
}

export default MailApp;
