import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App() {
  const { movies } = useMovies()
  return (
    <div className="container">
      <header className="box-header">
        <h1>Buscador de películas</h1>
        <input placeholder="Avengers, Star Wars, Attack on titan..."></input>
        <button type="submit">Buscar</button>
      </header>

      <main className="box-results">
        <Movies movies={movies} />
      </main>
    </div >
  )
}

export default App
