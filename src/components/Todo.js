import React from "react";

const Todo = ({ todo, setTodos, copyTask }) => {
  const handleCheck = () => {
    const newTodos = copyTask;
    newTodos[todo.id].status = !newTodos[todo.id].status;
    setTodos(newTodos);
  };

  const handleRemove = () => {
    const remove = copyTask;
    remove.splice(todo.id, 1);
    setTodos(remove);
  };

  return (
    <div className="todos_wrapper">
      <input
        type="checkbox"
        defaultChecked={todo.status}
        onClick={handleCheck}
      />
      <span
        style={{
          textDecoration: todo.status ? "line-through" : "none",
        }}
      >
        {todo.name}
      </span>
      <button onClick={handleRemove}>Delete</button>
    </div>
  );
};

export default Todo;
