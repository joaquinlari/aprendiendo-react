export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export type ListOfTodos = Todo[];

export interface Props {
  todos: ListOfTodos;
}
