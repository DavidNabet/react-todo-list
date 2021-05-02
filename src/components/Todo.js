import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Todo = ({ todo, setTodos, copyTask, id }) => {
	const handleCheck = () => {
		const newTodos = copyTask;
		newTodos[id].status = !newTodos[id].status;
		setTodos(newTodos);
	};

	const handleRemove = () => {
		const remove = copyTask;
		remove.splice(id, 1);
		setTodos(remove);
	};

	return (
		<div className="todos_wrapper">
			<input
				type="checkbox"
				name="todo"
				id="todo"
				defaultChecked={todo.status}
				onClick={handleCheck}
			/>
			<label
				htmlFor="todo"
				style={{
					textDecoration: todo.status ? "line-through" : "none",
					color: todo.status ? "grey" : "inherit",
				}}
			>
				{todo.name}
			</label>
			<span className="on-trash" onClick={handleRemove}>
				<FontAwesomeIcon icon="trash" />
			</span>
		</div>
	);
};

export default Todo;
