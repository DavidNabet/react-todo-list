import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Todo = ({ todo, setTodos, copyTask, theme, id }) => {
	const handleCheck = (id, status) => {
		const updated = copyTask.filter((task) => {
			task.id === id && (task.status = !task.status);
			return task;
		});
		setTodos(updated);
	};

	const handleRemove = () => {
		const remove = copyTask.filter((task) => task.id !== id);
		setTodos(remove);
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
