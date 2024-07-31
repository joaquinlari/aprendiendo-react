import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useState, useEffect } from 'react'

function useSearch() {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    if (search === '') {
      setError('No se puedebuscar una película vacía')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una película con un número')
      return
    }

    if (search.length < 3) {
      setError('La busqueda debe tener al menos 3 caracteres')
      return
    }

    setError(null)
  }, [search])
  return { search, updateSearch, error }

}

function App() {

  const { movies } = useMovies()
  const { search, updateSearch, error } = useSearch()


  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({ search })
  }
  const handleChange = (event) => {
    updateSearch(event.target.value)
  }
  return (
    <div className="container">
      <header className="box-header">
        <h1>Buscador de películas</h1>
        <form onSubmit={handleSubmit}>
          <input name="query" placeholder="Avengers, Star Wars, Attack on titan..."></input>
          <button type="submit">Buscar</button>
        </form>
      </header>

      <main className="box-results">
        <Movies movies={movies} />
      </main>
    </div >
  )
}

export default App
