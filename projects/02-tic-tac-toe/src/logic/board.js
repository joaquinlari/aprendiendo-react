import { COMBO_WINNER } from "../constants"

export const checkWinnerFrom = (boardToCheck) => {
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

export const checkEndGame = (newBoard) => {
    //revisa si todos los elementos son distintos de null, para comprobar empate
    return newBoard.every((square) => square !== null)
}