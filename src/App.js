import { useState } from "react";
import Header from "./components/Header";
import "./App.css";
function App() {
	const [nbTask, setNbTask] = useState([
		{ name: "Balancer la vieille", status: false },
		{ name: "Faire chier les gens", status: false },
		{ name: "Péter plus haut que son derrière", status: true },
	]);

	const [taskInput, setTaskInput] = useState("");

	return (
		<div className="container">
			<Header />
			<div className="form-group">
				{nbTask.map((todos, i) => {
					return (
						<div key={i}>
							<input
								type="checkbox"
								defaultChecked={todos.status}
								onClick={() => {
									const newTodos = [...nbTask];
									newTodos[i].status = !newTodos[i].status;
									setNbTask(newTodos);
								}}
							/>
							<span
								style={{
									textDecoration:
										todos.status === true ? "line-through" : "none",
								}}
							>
								{todos.name}
							</span>
							<button
								onClick={() => {
									const remove = [...nbTask];
									remove.splice(i, 1);
									setNbTask(remove);
								}}
							>
								Delete
							</button>
						</div>
					);
				})}
				<form
					onSubmit={(e) => {
						e.preventDefault();
						const newTask = [...nbTask];
						newTask.push({ name: taskInput, status: false });
						setNbTask(newTask);
						setTaskInput("");
					}}
				>
					<input
						placeholder="Ecrire une tâche"
						type="text"
						value={taskInput}
						onChange={(e) => setTaskInput(e.target.value)}
					/>
					<input type="submit" value="Ajouter" />
				</form>
			</div>
		</div>
	);
}

export default App;
