import React, { Component } from 'react';
import { ListGroup, ListGroupItem} from 'reactstrap';
import Draggable from 'react-draggable';

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
      <Draggable>
        <div style={{ position: "absolute", top: "100px", right:"100px" }}>
          <ListGroup>
            { this.renderItems() }
          </ListGroup>
        </div>
      </Draggable>
    );
  }
}

export default MailApp;
