
import React, { useState } from "react";
import { v4 as uuid } from "uuid";

export default function AddHabitModal({ onClose, onSave }) {
  const [date, setDate] = useState("");
  const [desc, setDesc] = useState("");
  const [habits, setHabits] = useState({
    reading: false,
    exercise: false,
    meditation: false,
  });

  const submit = () => {
    onSave({
      id: uuid(),
      date,
      description: desc,
      habits,
    });
    onClose();
  };

  return (
    <div className="modal">
      <h3>What Did You Do Today?</h3>
      <input type="date"
        required
        value={date} onChange={(e) => setDate(e.target.value)} />
      {Object.keys(habits).map((h) => (
        <label key={h}>
          <input
            type="checkbox"
            required
            name={h}
            checked={habits[h]}
            onChange={(e) =>
              setHabits({ ...habits, [h]: e.target.checked })
            }
          />
          {h}
        </label>
      ))}
      <input
        type="text"
        placeholder="Enter a short description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        required
      />
      <button type="submit" onClick={submit}>Submit</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
}
