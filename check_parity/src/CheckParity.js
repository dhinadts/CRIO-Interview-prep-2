import { useState } from "react";
import "./App.css";

function CheckParity() {
    const [value, setValue] = useState("");
    const [message, setMessage] = useState("");

    const handleCheck = () => {
        const num = Number(value);

        if (value.trim() === "" || isNaN(num)) {
            setMessage("Not a valid number!");
            return;
        }

        if (num % 2 === 0) {
            setMessage(`The number ${num} is even!`);
        } else {
            setMessage(`Oops, ${num} is odd!`);
        }
    };

    return (
        <div className="container">
            <div className="card">
                <h2>Even or Odd Checker</h2>

                <input
                    type="text"
                    name="number"
                    placeholder="Enter a number"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />

                <button onClick={handleCheck}>Check</button>

                {message && <p className="result">{message}</p>}
            </div>
        </div>
    );
}

export default CheckParity;
