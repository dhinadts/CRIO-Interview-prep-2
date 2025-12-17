import { useState } from "react";
import "./App.css";

function App() {
  const [board, setBoard] = useState(
    Array(9).fill(null).map(() => Array(9).fill(""))
  );
  const [message, setMessage] = useState("");

  const handleChange = (r, c, value) => {
    if (value === "" || /^[1-9]$/.test(value)) {
      const copy = board.map(row => [...row]);
      copy[r][c] = value;
      setBoard(copy);
      setMessage(""); // Clear message when user makes changes
    }
  };

  const validateSudoku = () => {
    // Check rows
    for (let r = 0; r < 9; r++) {
      const seen = new Set();
      for (let c = 0; c < 9; c++) {
        const value = board[r][c];
        if (value === "") continue;
        if (seen.has(value)) {
          setMessage("Invalid Sudoku! Conflicts found.");
          return;
        }
        seen.add(value);
      }
    }

    // Check columns
    for (let c = 0; c < 9; c++) {
      const seen = new Set();
      for (let r = 0; r < 9; r++) {
        const value = board[r][c];
        if (value === "") continue;
        if (seen.has(value)) {
          setMessage("Invalid Sudoku! Conflicts found.");
          return;
        }
        seen.add(value);
      }
    }

    // Check 3x3 subgrids
    for (let gridR = 0; gridR < 3; gridR++) {
      for (let gridC = 0; gridC < 3; gridC++) {
        const seen = new Set();
        for (let r = gridR * 3; r < gridR * 3 + 3; r++) {
          for (let c = gridC * 3; c < gridC * 3 + 3; c++) {
            const value = board[r][c];
            if (value === "") continue;
            if (seen.has(value)) {
              setMessage("Invalid Sudoku! Conflicts found.");
              return;
            }
            seen.add(value);
          }
        }
      }
    }

    // Check if board is complete
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        if (board[r][c] === "") {
          setMessage("Board is incomplete but no conflicts so far.");
          return;
        }
      }
    }

    setMessage("Valid Sudoku!");
  };

  const clearBoard = () => {
    setBoard(Array(9).fill(null).map(() => Array(9).fill("")));
    setMessage("");
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

      <div className="button-container">
        <button onClick={validateSudoku}>Validate</button>
        <button onClick={clearBoard}>Clear</button>
      </div>

      {message && (
        <div className={`message ${message.includes("Invalid") ? "invalid" : message.includes("Valid") ? "valid" : ""}`}>
          {message}
        </div>
      )}
    </div>
  );
}

export default App;