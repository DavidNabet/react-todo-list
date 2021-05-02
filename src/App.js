import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Header from "./components/Header";
import Form from "./components/Form";
import Todo from "./components/Todo";
import "./App.css";
library.add(faTrash, faTrashAlt);

function App() {
	const [todos, setTodos] = useState([
		{ name: "Balancer le vélo", status: false },
		{ name: "Pratiquer une activité", status: false },
		{ name: "Remplir le frigo", status: true },
	]);

	const [todoInput, setTodoInput] = useState("");
	const TASK = [...todos];

	const handleSubmit = (e) => {
		e.preventDefault();
		const newTasks = TASK;
		if (!todoInput) {
			alert("Renseignez une tâche !");
		} else {
			newTasks.push({ name: todoInput, status: false });
			setTodos(newTasks);
			setTodoInput("");
		}
	};

	return (
		<div className="container">
			<Header />
			<div className="container_inner">
				<div className="container_form">
					<Form
						onSubmitForm={handleSubmit}
						todoInput={todoInput}
						setTodoInput={setTodoInput}
					/>
				</div>
				<div className="container_todos">
					{todos.map((todo, i) => {
						return (
							<Todo
								key={i}
								id={i}
								setTodos={setTodos}
								copyTask={TASK}
								todo={todo}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default App;
