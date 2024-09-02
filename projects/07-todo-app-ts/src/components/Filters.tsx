import { FILTERS_BUTTONS } from "../consts";
import { FilterValue } from "../types";

interface Props {
  onFilterChange: (filter: FilterValue) => void;
  filterSelected: FilterValue;
}

export const Filters: React.FC<Props> = ({
  filterSelected,
  onFilterChange,
}) => {
  const handleClick = () => {};
  return (
    <ul className="filters">
      {Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
        const isSelected = key === filterSelected;
        const className = isSelected ? "selected" : "";
        return (
          <li key={key}>
            <a href={href} className={className} onClick={handleClick(key)}>
              {literal}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
