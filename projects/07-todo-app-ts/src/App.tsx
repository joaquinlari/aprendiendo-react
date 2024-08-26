import { useState } from "react";

const mocksTodos = [
  {
    id: "1",
    title: "todo 1",
    completed: false,
  },
  {
    id: "2",
    title: "todo 2",
    completed: false,
  },
  {
    id: "3",
    title: "todo 3",
    completed: false,
  },
];

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mocksTodos);
  return (
    <>
      <h1>To-do App</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} data-state={todo.completed.toString()}>
            {todo.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
