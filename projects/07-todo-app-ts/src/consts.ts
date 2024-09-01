export const TODO_FILTERS = {
  ALL: "all",
  ACTIVE: "active",
  COMPLETED: "completed",
} as const; //de lectura

export const FILTERS_BUTTONS = {
  [TODO_FILTERS.ALL]: {
    literal: "Todos",
    href: `/?filter=${TODO_FILTERS.ALL}`,
  },
  [TODO_FILTERS.ACTIVE]: {
    literal: "Activo",
    href: `/?filter=${TODO_FILTERS.ACTIVE}`,
  },
  [TODO_FILTERS.COMPLETED]: {
    literal: "Completado",
    href: `/?filter=${TODO_FILTERS.COMPLETED}`,
  },
};
