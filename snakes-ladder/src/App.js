import { useState } from "react";
import "./App.css";

export default function SnakeAndLadders() {
  const [p1, setP1] = useState(0);
  const [p2, setP2] = useState(0);
  const [turn, setTurn] = useState("P1");
  const [winner, setWinner] = useState(null);

  const snakes = { 99: 54, 70: 55, 52: 42, 25: 2 };
  const ladders = { 6: 25, 11: 40, 60: 85, 46: 90 };

  const rollDice = () => {
    if (winner) return;

    const dice = Math.floor(Math.random() * 6) + 1;
    let currentPos = turn === "P1" ? p1 : p2;
    let nextPos = currentPos + dice;

    if (nextPos > 100) {
      setTurn(turn === "P1" ? "P2" : "P1");
      return;
    }

    if (ladders[nextPos]) nextPos = ladders[nextPos];
    if (snakes[nextPos]) nextPos = snakes[nextPos];

    if (nextPos === 100) {
      setWinner(turn);
      return;
    }

    turn === "P1" ? setP1(nextPos) : setP2(nextPos);
    setTurn(turn === "P1" ? "P2" : "P1");
  };

  return (
    <div className="page">
      <div className="card">
        <h1>Snake & Ladders</h1>
        <div className="status-section">
          <div className="turn-box">
            {!winner && <p className="turn">Turn: {turn}</p>}
            {winner && (
              <p className="winner">
                Player {winner === "P1" ? 1 : 2} wins! Player {winner === "P1" ? 2 : 1} loses!
              </p>
            )}
          </div>

          <div className="players">
            <span className="dot p1-dot" /> P1
            <span className="dot p2-dot" /> P2
          </div>
        </div>

        <div className="board">
          {Array.from({ length: 100 }).map((_, index) => {
            const cellNumber = 100 - index;
            return (
              <div key={index} className="cell">
                {cellNumber}
                {p1 === cellNumber && <span className="p1">P1</span>}
                {p2 === cellNumber && <span className="p2">P2</span>}
              </div>
            );
          })}
        </div>

        <div className="actions">
          <button onClick={rollDice}>Roll Dice</button>
          <button onClick={() => window.location.reload()}>Reset</button>
        </div>

        <p className="info">
          Exact 100 is required to win. Land on a ladder to climb up, a snake to
          slide down.
        </p>
      </div>
    </div>
  );
}
