import { TodoId, type ListOfTodos, type Todo as TodoType } from "../types";
import { Todo } from "./Todo";

interface Props {
  todos: ListOfTodos;
  onCompleted: ({ id, completed }: Pick<TodoType, "id" | "completed">) => void;
  onRemove: (id: TodoId) => void;
}

export const Todos: React.FC<Props> = ({ todos, onRemove, onCompleted }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={`${todo.completed ? "completed" : ""}`}>
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onCompleted={onCompleted}
            onRemove={onRemove}
          />
        </li>
      ))}
    </ul>
  );
};
