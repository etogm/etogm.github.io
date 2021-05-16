import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    return <li><input type="checkbox"/> {this.props.task.text}</li>;
  }
}

export default TodoItem;
