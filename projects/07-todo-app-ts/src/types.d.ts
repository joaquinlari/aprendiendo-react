export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export type TodoId = Todo["id"];
export type TodoTitle = ["title"];
export type TodoCompleted = ["completed"];

export type ListOfTodos = Todo[];
export type TodoType = Todo;
