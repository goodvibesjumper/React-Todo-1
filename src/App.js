import React from "react";
import { domainToUnicode } from "url";

import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

import "./components/TodoComponents/Todo.css";

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
      todoList: todoList,
      task: ""
    };
  }

  inputChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  formSubmitHandler = event => {
    event.preventDefault();
    this.setState(prevState => {
      return {
        todoList: [
          ...prevState.todoList,
          {
            completed: false,
            id: Date.now(),
            task: prevState.task
          }
        ],
        task: ""
      };
    });
  };

  toggleItem = itemId => {
    this.setState(prevState => {
      return {
        todoList: prevState.todoList.map(taskItem => {
          if (taskItem.id === itemId) {
            return {
              task: taskItem.task,
              id: taskItem.id,
              completed: !taskItem.completed
            };
          } else {
            return taskItem;
          }
        })
      };
    });
  };

  clearCompleted = () => {
    this.setState(prevState => {
      return {
        todoList: prevState.todoList.filter(todoItem => {
          return !todoItem.completed;
        })
      };
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Welcome to your Todo App!</h1>
          <h2>Todo List</h2>
        </div>
        <div className="list-container">
          <TodoForm
            task={this.state.task}
            inputChangeHandler={this.inputChangeHandler}
            formSubmitHandler={this.formSubmitHandler}
          />
          <TodoList
            todoList={this.state.todoList}
            toggleItem={this.toggleItem}
          />
          <button onClick={this.clearCompleted} className="clearBtn">
            Finished Item!
          </button>
        </div>
      </div>
    );
  }
}

export default App;
