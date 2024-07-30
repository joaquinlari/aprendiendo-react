import './App.css'
import responseMovies from './mocks/with-results.json'
import responseMoviesWithoutResults from './mocks/no-results.json'
import { Movies } from './components/Movies'

function App() {
  const movies = responseMovies.Search
  return (
    <>
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
    </>
  )
}

export default App
