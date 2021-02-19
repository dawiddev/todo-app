import React from "react";

// export default function TodoItem() {

//   return <li></li>;
// }

class TodoItem extends React.Component {

  render() {
    return (
      <div>
        <h1
          style={{
            textDecoration: this.props.completed ? "line-through" : "none",
          }}
        >
          <input
            type="checkbox"
            name={this.props.todo}
            onChange={this.props.handleCompletion}
          ></input>
          {this.props.todo}
        </h1>
      </div>
    );
  }
}

export default TodoItem;
