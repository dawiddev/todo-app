import React from "react";

// export default function TodoItem() {
  
//   return <li></li>;
// }

class TodoItem extends React.Component{
  render(){
    console.log(this.props)
    return <h1>{this.props.todo}</h1>
  }
}

export default TodoItem