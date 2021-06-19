import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Todo = ({
	todo,
	handleCheck,
	copyTask,
	handleRemove,
	theme,
	idx,
	setTodos,
}) => {
	const handle = () => {
		const orderedTab = [];
		for (let i = 0; i < copyTask.length; i++) {
			if (copyTask[i].status === false) {
				orderedTab.push(copyTask[i]);
			}
		}
		for (let i = 0; i < copyTask.length; i++) {
			if (copyTask[i].status === true) {
				orderedTab.push(copyTask[i]);
			}
		}

		setTodos(orderedTab);
	};

	return (
		<div
			className="todos_wrapper"
			style={{ background: theme.bgCard, color: theme.button }}
		>
			<input
				type="checkbox"
				name="todo"
				id="todo"
				defaultChecked={todo.status}
				onClick={() => handleCheck(idx)}
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
			<span
				style={{
					background: theme.bgCard,
					color: theme.foreground,
					boxShadow: theme.boxShadow,
				}}
				className="on-trash"
				onClick={() => handleRemove(idx)}
			>
				<FontAwesomeIcon icon="trash-alt" />
			</span>
		</div>
	);
};

export default Todo;
