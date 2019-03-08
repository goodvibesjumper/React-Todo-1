import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form onSubmit={this.props.formSubmitHandler}>
        <input
          type="text"
          name="task"
          value={this.props.task}
          onChange={this.props.inputChangeHandler}
          placeholder="..todo"
          className="input"
        />
        <button type="submit" className="submitBtn">
          Add Todo Item
        </button>
      </form>
    );
  }
}

export default TodoForm;
