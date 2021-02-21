import React from "react";
import TodoList from "./TodoList.component";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: [], input: "" };
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const isEmpty = this.state.input.length === 0;
    if (isEmpty) {
      return;
    }

    const newTodo = {
      input: this.state.input,
      id: Date.now(),
    };

    this.setState((state) => ({
      todos: state.todos.concat(newTodo),
      input: "",
    }));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-item">
            {" "}
            What work do you have to get done today{" "}
          </label>{" "}
          <br></br>
          <input
            id="new-item"
            value={this.state.input}
            onChange={this.handleChange}
          />
          <button type="submit">Add Task</button>
        </form>
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default Todo;
