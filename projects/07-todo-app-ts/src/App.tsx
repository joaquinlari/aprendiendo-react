import { useState } from "react";
import {Todos} from './components/Todos'
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
      <Todos todos={todos}
    </>
  );
};

export default App;
