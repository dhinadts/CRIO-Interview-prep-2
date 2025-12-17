import { useState } from "react";
import "./App.css";

function App() {
  const [board, setBoard] = useState(
    Array(9).fill(null).map(() => Array(9).fill(""))
  );

  const handleChange = (r, c, value) => {
    if (value === "" || /^[1-9]$/.test(value)) {
      const copy = board.map(row => [...row]);
      copy[r][c] = value;
      setBoard(copy);
    }
  };

  const clearBoard = () => {
    setBoard(Array(9).fill(null).map(() => Array(9).fill("")));
  };

  return (
    <div className="App">
      <h1>Sudoku Validator</h1>
      <p>Enter numbers 1-9 and validate the board.</p>

      <div className="board">
        {board.map((row, r) =>
          row.map((value, c) => (
            <input
              key={`${r}-${c}`}
              className="cell"
              value={value}
              maxLength={1}
              onChange={(e) => handleChange(r, c, e.target.value)}
            />
          ))
        )}
      </div>

      <button>Validate</button>
      <button onClick={clearBoard}>Clear</button>
    </div>
  );
}

export default App;
