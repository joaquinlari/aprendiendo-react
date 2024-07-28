import './App.css'

function App() {

  return (
    <>
      <div className="container">
        <header className="box-header">
          <h1>Buscador de películas</h1>
          <input placeholder="Avengers, Star Wars, Attack on titan..."></input>
          <button type="submit">Buscar</button>

        </header>
        <main className="box-results">
          Acá se muestran los resultados
        </main>
      </div>
    </>
  )
}

export default App
