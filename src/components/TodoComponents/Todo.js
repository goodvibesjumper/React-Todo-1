import React from "react";

function Todo(props) {
  let completed = props.task.completed ? " completed" : "";
  console.log(props);
  return (
    <div
      className={`task ${completed}`}
      key={props.task.id}
      onClick={event => {
        props.toggleItem(props.task.id);
      }}
    >
      <p>{props.task.task}</p>
    </div>
  );
}

export default Todo;
