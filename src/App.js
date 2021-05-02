import { useState } from "react";
import uuid from "uuid/dist/v1";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Header from "./components/Header";
import Form from "./components/Form";
import Todo from "./components/Todo";
import "./App.css";
import Filter from "./components/Filter";
library.add(faTrash, faTrashAlt);

function App() {
	//L'ensemble des todos
	const [todos, setTodos] = useState([
		{ id: 0, name: "Balancer le vélo", status: false },
		{ id: 1, name: "Pratiquer une activité", status: false },
		{ id: 2, name: "Remplir le frigo", status: true },
	]);

	const [todoInput, setTodoInput] = useState("");
	//On garde une copie des todos, qu'on dispatchera dans chaque component Todo
	const TASK = [...todos];

	//Tableau des todos
	const [results, setResults] = useState(todos);

	//fonction qui va filtrer les todos par title
	const searchFilter = (event) => {
		let todoFilter = todos.filter((todo) => {
			if (todo.name.toLowerCase().includes(event.target.value.toLowerCase())) {
				return true;
			}
			return false;
		});
		setResults(todoFilter);
	};

	//fonction simplifiée des spread operators qui va rajouter une todo avec un id aléatoire
	const addTodo = (name) => {
		setTodos([...todos, { name, id: uuid(), status: false }]);
	};

	return (
		<div className="container">
			<Header />
			<div className="container_inner">
				<div className="container_form">
					<Form
						// onSubmitForm={handleSubmit}
						addTodo={addTodo}
						todoInput={todoInput}
						setTodoInput={setTodoInput}
					/>
				</div>
				<div className="container_todos">
					<div className="container_filter">
						<Filter searchFilter={searchFilter} />
					</div>

					{results.map((todo, i) => {
						return (
							<Todo
								key={i}
								// id={i}
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
