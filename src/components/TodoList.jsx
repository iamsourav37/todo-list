import React from "react";

import "../components/todo_list_style.css";

const TodoList = () => {
  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>TodoList</h1>
        <br />
        <input type="text" placeholder="Add a Todo" />
        <button>+</button>

        <ol>
          <li>learn React</li>
        </ol>
      </div>
    </div>
  );
};

export default TodoList;
