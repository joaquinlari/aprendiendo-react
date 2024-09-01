import { type TODO_FILTERS, type FILTERS_BUTTONS } from "../consts";

interface Props = {
  filterSelected: typeof TODO_BUTTONS [keyof typeof TODO_BUTTONS]

}


export const Filters: React.FC<Props> = ({
  filterSelected,
  onFilterChange,
}) => {
  return (
    <ul className="filters">
      <li>
        <a
          className={`${filterSelected === "all" ? "selected" : ""}`}
          onClick={() => {
            onFilterChange("all");
          }}
        >
          Todos
        </a>
      </li>
      <li>
        <a
          className={`${filterSelected === "active" ? "selected" : ""}`}
          onClick={() => {
            onFilterChange("active");
          }}
        >
          Activos
        </a>
      </li>
      <li>
        <a
          className={`${filterSelected === "completed" ? "selected" : ""}`}
          onClick={() => {
            onFilterChange("completed");
          }}
        >
          Activos
        </a>
      </li>
    </ul>
  );
};
