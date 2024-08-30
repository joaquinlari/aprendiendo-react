import { TodoId, type Todo as TodoType } from "../types";

interface Props extends TodoType {
  onRemove: (id: TodoId) => void;
  onCompleted: ({ id, completed }: Pick<TodoType, "id" | "completed">) => void;
}

export const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  onRemove,
  onCompleted,
}) => {
  return (
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={completed}
        onChange={(event) => {
          onCompleted({ id, completed: event.target.checked });
        }}
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
