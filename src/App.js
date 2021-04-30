import { useState } from "react";
import Header from "./components/Header";
import Todo from "./components/Todo";
import "./App.css";
function App() {
  const [task, setTask] = useState("");
  const [nbTask, setNbTask] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    const value = task;
    const tab = [...nbTask];
    tab.push(value);
    setNbTask(tab);
    console.log(tab);
    setTask("");
  };

  return (
    <div className="container">
      <Header />
      <div className="form-group">
        {nbTask.map((todos, i) => {
          return <Todo key={i} id={i} todos={todos} />;
        })}
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleClick}>Add task</button>
      </div>
    </div>
  );
}

export default App;
