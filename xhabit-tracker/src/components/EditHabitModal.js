
import React, { useState } from "react";

export default function EditHabitModal({ habit, onClose, onUpdate }) {
  const [desc, setDesc] = useState(habit.description);
  const [habits, setHabits] = useState(habit.habits);

  return (
    <div className="modal">
      <h3>Edit Habit</h3>
      <p>Date: {habit.date}</p>
      {Object.keys(habits).map((h) => (
        <label key={h}>
          <input
            type="checkbox"
            checked={habits[h]}
            onChange={(e) =>
              setHabits({ ...habits, [h]: e.target.checked })
            }
          />
          {h}
        </label>
      ))}
      <input value={desc} onChange={(e) => setDesc(e.target.value)} />
      <button onClick={() => {
        onUpdate({ ...habit, habits, description: desc });
        onClose();
      }}>Update</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
}
