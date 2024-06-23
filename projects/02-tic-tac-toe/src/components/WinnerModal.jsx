import { Square } from "./Square"
import PropTypes from 'prop-types'

export function WinnerModal({ winner, resetGame }) {
    if (winner === null) return null

    const winnerText = winner === false ? 'Empate' : `Ganó:`

    return (
        <section className="winner" >
            <div className="text">
                <h2>{winnerText}</h2>

                <header className="win">
                    {winner && <Square>{winner}</Square>}
                </header>
                <footer>
                    <button onClick={resetGame}>Empezar de nuevo</button>
                </footer>
            </div>
        </section >
    )
}

WinnerModal.propTypes = {
    winner: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
        PropTypes.oneOf([null]),
    ]).isRequired,
    resetGame: PropTypes.func.isRequired,
};