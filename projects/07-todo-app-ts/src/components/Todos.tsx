interface Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export const Todos = ({ todos }): JSX.Element => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};
