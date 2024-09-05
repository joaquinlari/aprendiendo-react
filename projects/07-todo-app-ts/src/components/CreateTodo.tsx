import { useState } from "react";
import { type TodoTitle } from "../types";

interface Props {
  onAddTodo: ({ title }: TodoTitle) => void;
}

export const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <input
      className="new-todo"
      value={inputValue}
      onChange={() => {}}
      onKeyDown={() => {}}
      placeholder="Que quieres hacer?"
    />
  );
};
