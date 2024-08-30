export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export type TodoId = Pick<Todo, "id">;
export type TodoTitle = Pick<Todo, "title">;

export type ListOfTodos = Todo[];
