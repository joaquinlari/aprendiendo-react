import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'



function App() {

  const { movies } = useMovies()

  const handleSubmit = (event) => {
    event.preventDefault()
    const { query } = Object.fromEntries(
      new window.FormData(event.target)
    )
    console.log(query)
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
