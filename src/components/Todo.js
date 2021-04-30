import React, { useState } from "react";

const Todo = ({ id, todos }) => {
  // Toujours mettre le useState dans le component pour éviter les fausses manip
  const [isChecked, setIsChecked] = useState(false);
  //   const handleTrash = () => {
  //     let remove = todos.split(" ");
  //     remove.splice(0, 1);
  //   };

  return (
    <div>
      <input
        type="checkbox"
        id={`react--${id}`}
        onChange={() => setIsChecked(!isChecked)}
      />
      <label
        htmlFor={`react--${id}`}
        style={{ textDecoration: isChecked ? "line-through" : "none" }}
      >
        {todos}
      </label>
      {/* onClick={handleTrash} */}
      <span style={{ cursor: "pointer" }}>Trash</span>
    </div>
  );
};

export default Todo;
