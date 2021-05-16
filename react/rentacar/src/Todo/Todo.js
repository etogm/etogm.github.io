import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { id: 0, status: false, text: 'task 1' },
        { id: 1, status: false, text: 'task 2' },
        { id: 2, status: false, text: 'task 3' },
      ],
    };
  }

  changeStatus = () => {
    console.log('click');
  }

  render() {
    return (
      <ol>
        {this.state.tasks.map((task) => (
          <TodoItem task={task} key={task.id} onClick={this.changeStatus()} />
        ))}
      </ol>
    );
  }
}

export default Todo;
