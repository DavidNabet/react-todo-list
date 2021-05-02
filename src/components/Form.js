import React from "react";

const Form = ({ onSubmitForm, todoInput, setTodoInput }) => {
	return (
		<form onSubmit={onSubmitForm}>
			<input
				placeholder="Ecrire une tâche"
				type="text"
				value={todoInput}
				onChange={(e) => setTodoInput(e.target.value)}
			/>
			<button style={{ cursor: !todoInput ? "no-drop" : "pointer" }}>
				Ajouter une tâche
			</button>
		</form>
	);
};

export default Form;
