import { useState } from "react";
import "./App.css";

export default function App() {
  const [digits, setDigits] = useState(
    Array.from({ length: 10 }, (_, i) => i)
  );
  const [dragIndex, setDragIndex] = useState(null);

  const handleDragStart = (index) => {
    setDragIndex(index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (dropIndex) => {
    if (dragIndex === null || dragIndex === dropIndex) return;

    const updated = [...digits];
    const draggedItem = updated[dragIndex];

    updated.splice(dragIndex, 1);
    updated.splice(dropIndex, 0, draggedItem);

    setDigits(updated);
    setDragIndex(null);
  };

  return (
    <div className="container">
      <h1>Drag & Drop Digits</h1>
      <p className="subtitle">Drag the boxes to reorder the digits 0–9.</p>

      <div className="grid">
        {digits.map((digit, index) => (
          <div
            key={digit}
            className="box"
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(index)}
          >
            {digit}
          </div>
        ))}
      </div>

      <p className="tip">
        Tip: Try reordering to make <span>0123456789</span> or reverse it!
      </p>
    </div>
  );
}
