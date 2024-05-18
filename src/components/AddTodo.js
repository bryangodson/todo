import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    //   preventing js auto submit behviour otherwise the text is sent without validation
    e.preventDefault();
    // checking to see if value is not empty
    if (!value) {
      alert("Please type something ");
      return;
    }
    // sending the value inputed in the input element over to the app through the addTodo prop up there.
    // so addTodo prop is a function.
    addTodo(value);
    // setting the value back to empty once the typing is completed by the user.
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="inputField"
        placeholder="Enter Todo..."
      />
      <button className="addButton" type="submit">
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
