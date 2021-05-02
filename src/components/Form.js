import React from "react";

const Form = ({ todoInput, setTodoInput, addTodo, theme }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!todoInput) {
			alert("Renseignez une tâche !");
		} else {
			addTodo(todoInput);
			setTodoInput("");
		}
	};
	return (
		//onSubmit={onSubmitForm}
		<form onSubmit={handleSubmit}>
			<input
				placeholder="Ecrire une tâche"
				type="text"
				value={todoInput}
				onChange={(e) => setTodoInput(e.target.value)}
			/>
			<button
				style={{
					cursor: !todoInput ? "no-drop" : "pointer",
					background: theme.button,
					color: theme.background,
				}}
			>
				Ajouter une tâche
			</button>
		</form>
	);
};

export default Form;
