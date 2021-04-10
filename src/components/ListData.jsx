import React from "react";
import "../components/todo_list_style.css";

const delBtnStyle = {
  background: "#fc5c65",
  color: "white",
  fontSize: "20px",
  margin: "10px",
};

const TodoList = (props) => {
  return (
    <li>
      <button
        style={delBtnStyle}
        onClick={() => {
          props.onSelect(props.id);
        }}
      >
        -
      </button>
      {props.itemData}
    </li>
  );
};

export default TodoList;
