import { useState } from "react";
import "./App.css";

const initialBoard = Array(9).fill(null);

function App() {
  const [board, setBoard] = useState(initialBoard);
  const [isXTurn, setIsXTurn] = useState(true);
  const [scores, setScores] = useState({ X: 0, O: 0, draws: 0 });
  const [winner, setWinner] = useState(null);

  const checkWinner = (b) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];

    for (let [a, b1, c] of lines) {
      if (b[a] && b[a] === b[b1] && b[a] === b[c]) {
        return b[a];
      }
    }
    return b.every(Boolean) ? "draw" : null;
  };

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O";

    const result = checkWinner(newBoard);

    if (result) {
      if (result === "draw") {
        setScores({ ...scores, draws: scores.draws + 1 });
      } else {
        setScores({ ...scores, [result]: scores[result] + 1 });
        setWinner(result);
      }
    }

    setBoard(newBoard);
    setIsXTurn(!isXTurn);
  };

  const restartRound = () => {
    setBoard(initialBoard);
    setWinner(null);
    setIsXTurn(true);
  };

  const resetAll = () => {
    restartRound();
    setScores({ X: 0, O: 0, draws: 0 });
  };

  return (
    <div className="app">
      <div className="card">
        <h1>Tic-Tac-Toe</h1>

        <div className="scores">
          <span>X: {scores.X}</span>
          <span>Draws: {scores.draws}</span>
          <span>O: {scores.O}</span>
        </div>

        {winner ? (
          <p>Winner: {winner}</p>
        ) : (
          <p>Turn: {isXTurn ? "X" : "O"}</p>
        )}

        <div className="board">
          {board.map((cell, i) => (
            <div
              key={i}
              className="cell"
              onClick={() => handleClick(i)}
            >
              {cell}
            </div>
          ))}
        </div>

        <div className="buttons">
          <button onClick={restartRound}>Restart Round</button>
          <button onClick={resetAll}>Reset All</button>
        </div>
      </div>
    </div>
  );
}

export default App;
