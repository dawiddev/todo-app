import React from "react";

// export default function TodoItem() {

//   return <li></li>;
// }

class TodoItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      completed: false,
    };
  }

  handleCompletion = () => {
    this.setState({ completed: !this.state.completed });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1
          style={{
            textDecoration: this.state.completed ? "line-through" : "none",
          }}
        >
          <input
            type="checkbox"
            name={this.props.todo}
            onChange={this.handleCompletion}
          ></input>
          {this.props.todo}
        </h1>
      </div>
    );
  }
}

export default TodoItem;
