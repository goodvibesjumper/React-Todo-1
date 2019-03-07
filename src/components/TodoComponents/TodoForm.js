import React from "react";

function TodoForm(props) {
  console.log(props);
  return (
    <form onSubmit={props.formSubmitHandler}>
      <input
        name="task"
        value={props.value}
        onChange={props.onChange}
        placeholder="..todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;
