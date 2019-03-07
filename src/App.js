import React from "react";
import { domainToUnicode } from "url";

import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

const todoList = [
  {
    task: "Add a task!",
    id: Date.now(),
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  // this component is going to take care of state, and any
  // change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      stateList: todoList,
      task: "",
      id: Date.now(),
      completed: false
    };
  }

  inputChangeHandler = event => {
    this.setState({ task: event.target.value });
  };

  formSubmitHandler = event => {
    event.preventDefault();
    let newList = {
      task: this.state.task,
      id: this.state.id,
      completed: this.state.completed
    };
    this.setState(prevState => {
      return {
        stateList: [...prevState.stateList, newList],
        task: "",
        id: "",
        completed: ""
      };
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <h2>Todo List:</h2>
        <div>
          {this.state.stateList.map(task => (
            <div> {task.task} </div>
          ))}
        </div>
        <TodoForm
          formSubmitHandler={this.formSubmitHandler}
          value={this.state.task}
          onChange={this.inputChangeHandler}
        />
      </div>
    );
  }
}

export default App;
