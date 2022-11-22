import React, { useRef, useState } from "react";

function Header({ todos, setTodos }) {
  const ref = useRef(null);

  const [newTodo, setNewTodo] = useState("");

  const onChangeInput = (e) => {
    setNewTodo(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (newTodo !== "") {
      const newValue = {
        name: newTodo,
        isCompleted: false,
        isVisible: true,
        isEditing: false,
      };
      setTodos([...todos, newValue]);

      setNewTodo("");
    } else {
      alert("Please Enter a todo!");
    }
  };
  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={onSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={newTodo}
          onChange={onChangeInput}
          autoFocus
          ref={ref}
        />
      </form>
    </header>
  );
}

export default Header;
