import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import "./App.css";
import Todo from "./components/Todo";

function App() {
	const [todos, setTodos] = useState([
		{ id: 0, name: "Balancer le vélo", status: false },
		{ id: 1, name: "Pratiquer une activité", status: false },
		{ id: 2, name: "Remplir le frigo", status: true },
	]);

	const [todoInput, setTodoInput] = useState("");
	const TASK = [...todos];

	const handleSubmit = (e) => {
		e.preventDefault();
		const newTasks = TASK;
		newTasks.push({ name: todoInput, status: false });
		setTodos(newTasks);
		setTodoInput("");
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
							<Todo key={i} setTodos={setTodos} copyTask={TASK} todo={todo} />
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default App;
