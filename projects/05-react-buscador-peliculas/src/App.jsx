import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useState, useEffect, useRef } from 'react'

function useSearch() {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

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
  const [sort, setSort] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, sort })

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }
  const handleChange = (event) => {
    updateSearch(event.target.value)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <div className="container">
      <header className="box-header">
        <h1>Buscador de películas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input onChange={handleChange} name="query" placeholder="Avengers, Star Wars, Attack on titan..."></input>
          <input type="checkbox" onChange={handleSort} checked={sort}></input>
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        {
          loading ? <p>Cargando...</p> : <Movies movies={movies} />
        }
      </main>
    </div >
  )
}

export default App
