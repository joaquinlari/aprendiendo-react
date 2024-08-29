import { type Todo as TodoType } from "../types";

interface Props extends TodoType {
  onRemove: (id: number) => void;
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemove }) => {
  return (
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={completed}
        onChange={() => {}}
      />
      <label>{title}</label>
      <button
        className="destroy"
        onClick={() => {
          onRemove(id);
        }}
      />
    </div>
  );
};
