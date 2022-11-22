import React, { useState } from "react";

function Footer({ todos, setTodos }) {
  const [selected, setSelected] = useState({ id: "all" });

  const showAll = () => {
    setTodos((prevState) =>
      prevState.map((el) => {
        el.isVisible = true;
        return el;
      })
    );
    setSelected({ id: "all" });
  };

  const showActive = () => {
    setTodos((prevState) =>
      prevState.map((el) => {
        el.isCompleted ? (el.isVisible = false) : (el.isVisible = true);
        return el;
      })
    );
    setSelected({ id: "active" });
  };

  const showCompleted = () => {
    setTodos((prevState) =>
      prevState.map((el) => {
        el.isCompleted ? (el.isVisible = true) : (el.isVisible = false);
        return el;
      })
    );
    setSelected({ id: "completed" });
  };

  const onClickAll = () => {
    const found = todos.every((el) => el.isCompleted === true);
    if (found) {
      setTodos(
        todos.map((el) => {
          el.isCompleted = false;
          return el;
        })
      );
    } else {
      setTodos(
        todos.map((el) => {
          el.isCompleted = true;
          return el;
        })
      );
    }
  };

  const clearCompleted = () => {
    setTodos((prevState) => prevState.filter((el) => !el.isCompleted));
  };
  return (
    <footer className="footer" hidden={todos.length === 0}>
      <span className="todo-count">
        <strong> {todos.length}</strong>
        items left
      </span>

      <ul className="filters">
        <li>
          <a
            href="#/"
            className={selected.id === "all" ? "selected" : ""}
            onClick={showAll}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={selected.id === "active" ? "selected" : ""}
            onClick={showActive}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={selected.id === "completed" ? "selected" : ""}
            onClick={showCompleted}
          >
            Completed
          </a>
        </li>
        <li>
          <a onClick={onClickAll} href="#/">
            Mark all as complete
          </a>
        </li>
        <li>
          <a onClick={clearCompleted} href="#/">
            Clear completed
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
