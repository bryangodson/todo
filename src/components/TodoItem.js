import React from "react";

const TodoItem = ({ index, todo, toggleTodo, deleteTodo }) => {
  // all these props  are recived from app.js and passed as props again to TodoList.js and then passed to this current component.

  return (
    <div className="list">
      <li
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      >
        {index + 1 + " "} {todo.text}
      </li>
      <span className="btns">
        <button className="completedButton" onClick={() => toggleTodo(index)}>
          {todo.completed ? "Revert" : "Completed"}
        </button>
        <button className="deleteButton" onClick={() => deleteTodo(index)}>
          Delete
        </button>
      </span>
    </div>
  );
};

export default TodoItem;
