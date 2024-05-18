import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ol>
      {todos.map((currentItem, currentIndex) => (
        <TodoItem
          key={currentIndex}
          index={currentIndex}
          todo={currentItem}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ol>
  );
};

export default TodoList;
