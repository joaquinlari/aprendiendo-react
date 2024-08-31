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
  const handleOnCompleted = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    onCompleted({
      id,
      completed: event.target.checked,
    });
  };
  return (
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={completed}
        onChange={handleOnCompleted}
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
