import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { removeTodo, setTodos, updateTodo } from "../features/TodoSlice";
import { useDispatch } from "react-redux";
const Todo = ({ todo, copyTask, theme, id }) => {
  const dispatch = useDispatch();

  const handleCheck = (id, status) => {
    // const updated = copyTask.filter((task) => {
    //   task.id === id && (task.status = !task.status);
    //   return task;
    // });
    dispatch(updateTodo({ id }));
  };

  const handleRemove = () => {
    if (todo.status) {
      dispatch(removeTodo({ id }));
    }
  };

  return (
    <div
      className="todos_wrapper"
      style={{ background: theme.bgCard, color: theme.button }}
    >
      <input
        type="checkbox"
        name={`todo-${id}`}
        id={`todo-${id}`}
        defaultChecked={todo.status}
        onClick={() => handleCheck(id)}
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
        onClick={handleRemove}
      >
        <FontAwesomeIcon icon="trash" />
      </span>
    </div>
  );
};

export default Todo;
