import { createContext } from "react";

// 1. Crear el contexto
export const FiltersContext = createContext()

//2. Crear el Provider
export function FiltersProvider({ children }) {
    return (
        <FiltersContext.Provider value={{
            category: 'all',
            minPrice: 0
        }}>
            {children}
        </FiltersContext.Provider>
    )
}