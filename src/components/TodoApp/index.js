import "./style.css";

import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function TodoApp() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <section className="todoapp">
        <Header todos={todos} setTodos={setTodos} />
        <Main todos={todos} setTodos={setTodos} />
        <Footer todos={todos} setTodos={setTodos} />
      </section>
      <footer className="info">
        <p>
          Created by <a href="https://d12n.me/">Dmitry Sharabin</a>
        </p>
        <p>Changed by Samet Candan</p>
      </footer>
    </>
  );
}

export default TodoApp;
