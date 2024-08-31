import { useState } from "react";
import { Todos } from "./components/Todos";
import { type TodoId, type TodoType } from "./types";
import Footer from "./components/Footer";

const mocksTodos = [
  {
    id: 1,
    title: "Aprender React",
    completed: true,
  },
  {
    id: 2,
    title: "Aprender TypeScript",
    completed: false,
  },
  {
    id: 3,
    title: "Aprender To-Do",
    completed: false,
  },
];

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mocksTodos);

  const handleRemove = (id: TodoId): void => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleCompleted = ({
    id,
    completed,
  }: Pick<TodoType, "id" | "completed">): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <>
      <div className="todoapp">
        <h1>To-do App</h1>
        <Todos
          todos={todos}
          onRemove={handleRemove}
          onCompleted={handleCompleted}
        />
        <Footer />
      </div>
    </>
  );
};

export default App;
