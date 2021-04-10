import React, { useState } from "react";

import "../components/todo_list_style.css";

const TodoList = () => {
  const [myTodos, setTodo] = useState([]);
  const [inputData, setInputData] = useState("");

  const addTodo = (event) => {
    console.log("in addTodo function :", inputData);
    if (inputData !== "") setTodo((oldData) => [...oldData, inputData]);
    setInputData("");
  };

  const inputDataOnChange = (event) => {
    setInputData(event.target.value);
  };

  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>TodoList</h1>
        <br />
        <input
          type="text"
          placeholder="Add a Todo"
          onChange={inputDataOnChange}
          value={inputData}
        />
        <button onClick={addTodo}>+</button>

        <ol>
          {myTodos.map((value, index) => {
            return <li key={index}>{value}</li>;
          })}
        </ol>
      </div>
    </div>
  );
};

export default TodoList;
