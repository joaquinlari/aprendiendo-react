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
    </ul>
  );
};
