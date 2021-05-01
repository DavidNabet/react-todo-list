import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Todo from "./components/Todo";

import { Container, Flex } from "@chakra-ui/react";

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
    <Container centerContent maxW="xl" margin="auto">
      <Flex height="60vh" alignItems="center" justifyContent="center">
        <Flex
          direction="column"
          width="inherit"
          pt={5}
          pb={5}
          background="gray.100"
          rounded={6}
          alignItems="center"
        >
          <Header />
          <div className="container_inner">
            {todos.map((todo, i) => {
              return (
                <Todo key={i} setTodos={setTodos} copyTask={TASK} todo={todo} />
              );
            })}
            <Form
              onSubmitForm={handleSubmit}
              todoInput={todoInput}
              setTodoInput={setTodoInput}
            />
          </div>
        </Flex>
      </Flex>
    </Container>
  );
}

export default App;
