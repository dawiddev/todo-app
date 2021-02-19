import React from "react";
import TodoItem from "./TodoItem.component";

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo.input}
            completed={todo.completed}
            handleCompletion={this.props.handleCompletion}
          />
        ))}
      </ul>
    );
  }
}

export default TodoList;
