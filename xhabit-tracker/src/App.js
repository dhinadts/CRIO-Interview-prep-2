
import React, { useEffect, useState } from "react";
import AddHabitModal from "./components/AddHabitModal";
import EditHabitModal from "./components/EditHabitModal";
import HabitList from "./components/HabitList";
import AverageChart from "./components/AverageChart";
import WeeklyChart from "./components/WeeklyChart";

export default function App() {
  const [habits, setHabits] = useState([]);
  const [openAdd, setOpenAdd] = useState(false);
  const [editHabit, setEditHabit] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("habits")) || [];
    setHabits(data);
  }, []);

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  return (
    <div className="container">
      <h1>Habit Tracker</h1>

      <div className="grid">
        <div className="card">
          <h2>Update Today's Progress</h2>
          <button onClick={() => setOpenAdd(true)}>+ Add data</button>
        </div>

        <AverageChart habits={habits} />
        <WeeklyChart habits={habits} />
      </div>

      <h2>Recent Habit Completions</h2>
      <HabitList
        habits={habits}
        onEdit={setEditHabit}
        onDelete={(id) =>
          setHabits((prev) => prev.filter((h) => h.id !== id))
        }
      />

      {openAdd && (
        <AddHabitModal
          onClose={() => setOpenAdd(false)}
          onSave={(h) => setHabits((prev) => [...prev, h])}
        />
      )}

      {editHabit && (
        <EditHabitModal
          habit={editHabit}
          onClose={() => setEditHabit(null)}
          onUpdate={(updated) =>
            setHabits((prev) =>
              prev.map((h) => (h.id === updated.id ? updated : h))
            )
          }
        />
      )}
    </div>
  );
}
