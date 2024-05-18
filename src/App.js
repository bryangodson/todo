import React, { useState } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import "./App.css";
const App = () => {
  // array of todos
  const [todos, setTodos] = useState([]);

  // adding todos to already existing todos.
  const addTodo = (textInputed) => {
    setTodos([...todos, { text: textInputed, completed: false }]);
  };

  // changing the completed property of the todo item
  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };
  // removing the current item from the array.
  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <div className="top">
        <h1 className="heading">Todo List</h1>
        <AddTodo addTodo={addTodo} />
      </div>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
