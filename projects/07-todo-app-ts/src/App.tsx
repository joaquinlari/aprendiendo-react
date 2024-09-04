import { useState } from "react";
import { Todos } from "./components/Todos";
import { FilterValue, type TodoId, type TodoType } from "./types";
import { Footer } from "./components/Footer";
import { TODO_FILTERS } from "./consts";

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
  const [filterSelected, setFilterSelected] = useState<FilterValue>(
    TODO_FILTERS.ALL
  );

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

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter);
  };

  const activeCount = todos.filter((todo) => !todo.completed).length;
  const completedCount = todos.length - activeCount;

  return (
    <>
      <div className="todoapp">
        <h1>To-do App</h1>
        <Todos
          todos={todos}
          onRemove={handleRemove}
          onCompleted={handleCompleted}
        />
        <Footer
          activeCount={activeCount}
          completedCount={completedCount}
          filterSelected={filterSelected}
          onClearCompleted={() => {}}
          handleFiltersChange={handleFilterChange}
        />
      </div>
    </>
  );
};

export default App;
