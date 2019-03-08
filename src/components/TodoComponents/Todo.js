import React from "react";

function Todo(props) {
  let completed = props.task.completed ? " completed" : "";
  return (
    <div
      className={`task ${completed}`}
      key={props.task.id}
      onClick={event => {
        props.toggleItem.task(props.task.id);
      }}
    >
      <p>{props.task.name}</p>
    </div>
  );
}

export default Todo;
