import './App.css'
import { useState } from 'react'
import PropTypes from 'prop-types';

const TURNS = {  // se crean los turnos 'X' y 'O'
  X: 'x',
  O: 'o'
}

const COMBO_WINNER = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

const Square = ({ children, isSelected, updateBoard, index }) => {

  const className = `square ${isSelected ? 'is-selected' : ''}`   //se crea una variable 'className', si 'isSelected' es true se agrega la clase 'is-selected' a 'square'

  const handleClick = () => {  //funcion para ejecutar al hacer click
    updateBoard(index)           //ejecuta otra funcion que recibe como parametro el indice
  }

  return (
    <div onClick={handleClick} className={className}>  {/*muestra un div con el metodo 'onClick' que ejecuta la funcion 'handleClick'*/}
      {children}
    </div>
  )
}

Square.propTypes = { //para evitar errores visuales molestos
  children: PropTypes.node,
  isSelected: PropTypes.bool,
  updateBoard: PropTypes.func,
  index: PropTypes.number
};

function App() { //funcion principal
  const [board, setBoard] = useState(Array(9).fill(null))  //crea un hook de estado para crear los 9 espacios de la tabla y rellenarlos con 'null'
  const [turn, setTurn] = useState(TURNS.X)  // crea un hook para el estado de los turnos de los jugadores, empieza por 'X'
  const [winner, setWinner] = useState(null) // hook para ganador, null es 'no hay ganador', false es 'empate'

  const checkWinner = (boardToCheck) => {
    for (const combo of COMBO_WINNER) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a] // X u O
      }
    }
  }

  const updateBoard = (index) => {   //acá se crea la funcion 'updateBoard' que se utilizo arriba, es llamado por 'handleClick'
    if (board[index] || winner) return // si tiene algo no se actualiza

    const newBoard = [...board] // se crea una copia del estado del array 'board'
    newBoard[index] = turn // le agrega el estado de turn a cada indice del nuevo array
    setBoard(newBoard) // muestra los cambios

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X  //si el turno es X se cambia a O y viceversa
    setTurn(newTurn) // actualiza el estado del turno con el nuevo turno

    const newWinner = checkWinner(newBoard)

    if (newWinner) {
      setWinner(newWinner)
    }
  }

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <section className="game">
        {board.map((_, index) => {  //recorre el array 'board' con .map, ignora el primer parametro y el segundo usa el index
          return (   //por cada elemento recorrido le asigna a cada uno el componente <Square> el cual crea un <div>
            <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
            >
              {board[index]}
            </Square>
          )
        })}
      </section>
      <section className="turn"> {/*le agrega el parametro 'isSelected' a <Square>*/}
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>   {/*si el turno es de 'X' muestra 'X' */}
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>  {/*si el turno es de 'O' muestra 'O' */}
      </section>
    </main>
  )
}
// repasar 'Rspread' y 'rest' operator
export default App