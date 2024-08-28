import { useState } from "react";
import { Todos } from "./components/Todos";

const mocksTodos = [
  {
    id: 1,
    title: "Aprender React",
    completed: false,
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
  const [todos] = useState(mocksTodos);
  return (
    <>
      <div className="todoapp">
        <h1>To-do App</h1>
        <Todos todos={todos} />
      </div>
    </>
  );
};

export default App;
