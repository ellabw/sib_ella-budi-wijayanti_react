import React, { Component } from "react";

export default class Halu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      todos: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => this.setState({ todos: data.slice(0, 20) }));
  }

  render() {
    return (
      <div>
        <table className="table">
          <tbody>
            {this.state.todos.map((todo, index) => {
              <tr key={index}>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.title}</td>
                <td>{todo.completed ? "v" : "x"}</td>
              </tr>;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
