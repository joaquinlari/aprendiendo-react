import './App.css'
import { useState } from 'react'
import confetti from 'canvas-confetti';

import { Square } from './components/Square.jsx'
import { TURNS } from './constants.js'
import { checkWinnerFrom, checkEndGame } from './logic/board.js';
import { WinnerModal } from './components/WinnerModal.jsx';

function App() { //funcion principal
  const [board, setBoard] = useState(Array(9).fill(null))  //crea un hook de estado para crear los 9 espacios de la tabla y rellenarlos con 'null'
  const [turn, setTurn] = useState(TURNS.X)  // crea un hook para el estado de los turnos de los jugadores, empieza por 'X'
  const [winner, setWinner] = useState(null) // hook para ganador, null es 'no hay ganador', false es 'empate'

  const updateBoard = (index) => {   //acá se crea la funcion 'updateBoard' que se utilizo arriba, es llamado por 'handleClick'
    if (board[index] || winner) return // si tiene algo no se actualiza

    const newBoard = [...board] // se crea una copia del estado del array 'board'
    newBoard[index] = turn // le agrega el estado de turn a cada indice del nuevo array
    setBoard(newBoard) // muestra los cambios

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X  //si el turno es X se cambia a O y viceversa
    setTurn(newTurn) // actualiza el estado del turno con el nuevo turno

    const newWinner = checkWinnerFrom(newBoard)

    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Empezar de nuevo</button>
      <section className="game">
        {board.map((square, index) => {  //recorre el array 'board' con .map, primer parametro usa 'square' y el segundo usa el index
          return (   //por cada elemento recorrido le asigna a cada uno el componente <Square> el cual crea un <div>
            <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
            >
              {square}
            </Square>
          )
        })}
      </section>
      <section className="turn"> { /*le agrega el parametro 'isSelected' a <Square>*/}
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>   {/*si el turno es de 'X' muestra 'X' */}
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>  {/*si el turno es de 'O' muestra 'O' */}
      </section>

      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  )
}
// repasar 'spread' y 'rest' operator
export default App