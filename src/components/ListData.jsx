import React from "react";
import "../components/todo_list_style.css";

const TodoList = (props) => {
  return <li key={props.index}>{props.itemData}</li>;
};

export default TodoList;
