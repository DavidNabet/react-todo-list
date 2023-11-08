import { useState, useContext } from "react";
// import uuid from "uuid/dist/v1";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrash,
  faTrashAlt,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import Header from "./components/Header";
import Form from "./components/Form";
import Todo from "./components/Todo";
import Filter from "./components/Filter";
import { ThemeContext } from "./context/ThemeContext";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./features/TodoSlice";
library.add(faTrash, faTrashAlt, faSun, faMoon);

function App() {
  const todos = useSelector((state) => state?.todos?.todos);
  const dispatch = useDispatch();

  const [todoInput, setTodoInput] = useState("");
  // le résultat de la recherche
  const [searchInput, setSearchInput] = useState("");
  // const [search, setSearch] = useState(todos);
  const [search, setSearch] = useState();

  //On garde une copie des todos, qu'on dispatchera dans chaque component Todo
  const TASK = [...todos];

  //fonction qui va filtrer les todos par title
  const searchFilter = (e) => {
    const keyword = e.target.value;
    if (keyword !== "") {
      const results = todos.filter((todo) => {
        return todo.name.toLowerCase().includes(keyword.toLowerCase());
      });
      setSearch(results);
    } else {
      setSearch(todos);
    }
    setSearchInput(keyword);
  };

  const addTodoAction = (name) => {
    return dispatch(addTodo({ name }));
  };

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
              addTodo={addTodoAction}
              theme={theme}
              todoInput={todoInput}
              setTodoInput={setTodoInput}
            />
          </div>
          <div className="container_todos">
            <div className="container_filter">
              <Filter
                theme={theme}
                searchInput={searchInput}
                searchFilter={searchFilter}
              />
            </div>

            {searchInput !== ""
              ? search.map((todo) => (
                  <Todo
                    key={todo.id}
                    id={todo.id}
                    theme={theme}
                    copyTask={TASK}
                    todo={todo}
                  />
                ))
              : todos.map((todo) => (
                  <Todo
                    key={todo.id}
                    id={todo.id}
                    theme={theme}
                    copyTask={TASK}
                    todo={todo}
                  />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
