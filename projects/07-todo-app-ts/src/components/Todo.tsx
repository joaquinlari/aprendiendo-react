import { type Props } from "../types";

export const Todo: React.FC<Props> = ({ id, title, completed }) => {
  return (
    <div className="view">
      <input type="checkbox" checked={completed} onChange={() => {}} />
      <label>{title}</label>
      <button className="destroy" onClick={() => {}} />
    </div>
  );
};
