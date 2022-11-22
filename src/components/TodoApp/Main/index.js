import React from "react";

function Main({ todos, setTodos }) {
  const onCheckboxClick = (i) => {
    setTodos((prevState) =>
      prevState.map((el, index) => {
        if (index === i) {
          return { ...el, isCompleted: !el.isCompleted };
        }
        return el;
      })
    );
  };

  const focusFunc = (i) => {
    setTodos((prevState) =>
      prevState.map((el, index) => {
        if (index === i) {
          return { ...el, isEditing: true };
        }
        return { ...el, isEditing: false };
      })
    );
  };

  const blurFunc = (i) => {
    setTodos((prevState) =>
      prevState.map((el, index) => {
        return { ...el, isEditing: false };
      })
    );
  };

  const onChangeItems = (i, e) => {
    setTodos((prevState) =>
      prevState.map((el, index) => {
        if (index === i) {
          return { ...el, name: e.target.value };
        }
        return el;
      })
    );
  };

  const onDelete = (e) => {
    setTodos((prevState) =>
      prevState.filter((el, index) => index != e.target.id)
    );
  };

  {
    return (
      <section className="main">
        <ul className="todo-list">
          {todos.map((todo, i) => (
            <li key={i} className="flex-box-li">
              <div>
                <input
                  onClick={(e) => onCheckboxClick(i)}
                  type="checkbox"
                  checked={todo.isCompleted === true}
                  hidden={todo.isVisible === false}
                  className="toggle"
                />
              </div>
              <div className="list-item">
                <input
                  onChange={(e) => onChangeItems(i, e)}
                  value={todo.name}
                  className={
                    (todo.isCompleted ? "view completed" : "view") +
                    " " +
                    (todo.isEditing ? "edit" : "")
                  }
                  hidden={todo.isVisible === false}
                  onFocus={(e) => focusFunc(i, e)}
                  onBlur={(e) => blurFunc(i, e)}
                />
              </div>

              <div>
                <button
                  id={i}
                  onClick={onDelete}
                  className="destroy mt-1"
                ></button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default Main;
