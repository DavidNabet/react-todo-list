import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Todo = ({ todo, theme, id, handleCheck, handleRemove }) => {
  console.log("Todo render");
  return (
    <div
      className="todos_wrapper"
      style={{ background: theme.bgCard, color: theme.button }}
    >
      <input
        type="checkbox"
        name={`todo-${id}`}
        id={`todo-${id}`}
        checked={todo.status}
        onChange={(e) => handleCheck(todo.id, e.target.checked)}
      />
      <label
        htmlFor={`todo-${id}`}
        style={{
          textDecoration: todo.status ? "line-through" : "none",
          color: todo.status ? "grey" : "inherit",
        }}
      >
        {todo.name}
      </label>
      <span
        style={{
          background: theme.bgCard,
          color: theme.foreground,
          boxShadow: theme.boxShadow,
        }}
        className={`on-trash ${todo.status === true ? "active" : ""}`}
        onClick={() => handleRemove(todo)}
      >
        <FontAwesomeIcon icon="trash" />
      </span>
    </div>
  );
};

export default Todo;
