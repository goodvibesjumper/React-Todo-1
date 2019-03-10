// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

import Todo from "./Todo.js";

function TodoList(props) {
  return (
    <div className="todo-list">
      {props.todoList.map(taskItem => {
        return <Todo task={taskItem} toggleItem={props.toggleItem} />;
      })}
    </div>
  );
}

export default TodoList;
