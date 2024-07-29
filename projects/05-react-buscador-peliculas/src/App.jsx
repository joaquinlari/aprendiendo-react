import './App.css'
import responseMovies from './mocks/with-results.json'
import responseMoviesWithoutResults from './mocks/no-results.json'

function App() {

  const movies = responseMovies.Search
  const hasMovies = movies?.length > 0

  return (
    <>
      <div className="container">
        <header className="box-header">
          <h1>Buscador de películas</h1>
          <input placeholder="Avengers, Star Wars, Attack on titan..."></input>
          <button type="submit">Buscar</button>
        </header>

        <main className="box-results">
          {
            hasMovies
              ? (
                < ul >
                  {
                    movies.map(movie => (
                      <li className="box-results-ul_li" key={movie.imdbID}>
                        <h3>{movie.Title}</h3>
                        <p>{movie.Year}</p>
                        <img src={movie.Poster} alt={movie.Title}></img>
                      </li>
                    ))
                  }
                </ul>
              )
              : (
                <p>No se encontraron resultados</p>
              )
          }
        </main>
      </div >
    </>
  )
}

export default App
