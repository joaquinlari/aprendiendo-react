import { useState } from "react";
import { Todos } from "./components/Todos";

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

  const handleRemove = (id: number): void => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <>
      <div className="todoapp">
        <h1>To-do App</h1>
        <Todos todos={todos} onRemove={handleRemove} />
      </div>
    </>
  );
};

export default App;
