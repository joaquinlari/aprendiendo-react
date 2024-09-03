import { FilterValue } from "../types";
import { Filters } from "./Filters";

interface Props {
  activeCount: number;
  completedCount: 0;
  filterSelected: FilterValue;
  onClearCompleted: () => void;
}

export const Footer: React.FC<Props> = ({
  activeCount = 0,
  completedCount = 0,
  filterSelected,
  onClearCompleted,
}) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong> tareas pendientes
      </span>

      <Filters filterSelected={} onFilterChange={() => {}} />
    </footer>
  );
};
