import { useState, useContext } from "react";
// import uuid from "uuid/dist/v1";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Header from "./components/Header";
import Form from "./components/Form";
import Todo from "./components/Todo";
// import Filter from "./components/Filter";
import { ThemeContext } from "./context/ThemeContext";
import "./App.css";
library.add(faTrash, faTrashAlt);

function App() {
	//L'ensemble des todos
	const [todos, setTodos] = useState([
		{ name: "Balancer le vélo", status: false },
		{ name: "Pratiquer une activité", status: false },
		{ name: "Remplir le frigo", status: false },
	]);

	const [todoInput, setTodoInput] = useState("");
	//On garde une copie des todos, qu'on dispatchera dans chaque component Todo
	// .sort() pour avoir les

	//fonction qui va filtrer les todos par title
	/*   const searchFilter = (event) => {
    let todoFilter = todos.filter((todo) => {
      if (todo.name.toLowerCase().includes(event.target.value.toLowerCase())) {
        return true;
      }
      return false;
    });
    setResults(todoFilter);
  }; */

	//fonction simplifiée des spread operators qui va rajouter une todo avec un id aléatoire
	const addTodo = (name) => {
		//id: todos[todos.length - 1].id++
		setTodos([...todos, { name, status: false }]);
	};

	const handleCheck = (i) => {
		const newTodos = [...todos];
		newTodos[i].status = !newTodos[i].status;
		setTodos(newTodos);
	};

	const handleRemove = (i) => {
		const remove = [...todos];
		remove.splice(i, 1);
		setTodos(remove);
	};

	console.log(useContext(ThemeContext));

	const { toggleTheme, light, dark, isLight } = useContext(ThemeContext);
	const theme = isLight ? light : dark;

	return (
		<div className="wrapper" style={{ background: theme.background }}>
			<div className="container">
				<Header theme={theme} isLight={isLight} toggleTheme={toggleTheme} />
				<div className="container_inner">
					<div
						className="container_form"
						style={{ background: theme.bgCard, boxShadow: theme.boxShadow }}
					>
						<Form
							// onSubmitForm={handleSubmit}
							addTodo={addTodo}
							theme={theme}
							todoInput={todoInput}
							setTodoInput={setTodoInput}
						/>
					</div>
					<div className="container_todos">
						{/* <div className="container_filter">
							<Filter theme={theme} searchFilter={searchFilter} />
						</div> */}

						{todos.map((todo, i) => {
							return (
								<Todo
									key={i}
									idx={i}
									theme={theme}
									handleCheck={handleCheck}
									handleRemove={handleRemove}
									copyTask={todos}
									todo={todo}
									setTodos={setTodos}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
