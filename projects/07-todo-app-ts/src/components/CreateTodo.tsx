import { type TodoTitle } from "../types";

interface Props {
  onAddTodo: ({ title }: TodoTitle) => void;
}

export const CreateTodo: React.FC<Props> = ({ saveTodo }) => {};
