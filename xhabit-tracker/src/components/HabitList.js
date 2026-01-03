
export default function HabitList({ habits, onEdit, onDelete }) {
  if (!habits.length) return <p>No Progress to show!</p>;

  return habits.map((h) => (
    <div key={h.id} className="habit-card">
      <p>{h.description}</p>
      <small>{h.date}</small>
      <div>
        {Object.keys(h.habits).filter(k => h.habits[k]).map(k => (
          <span key={k}>{k}</span>
        ))}
      </div>
      <button onClick={() => onEdit(h)}>✏️</button>
      <button onClick={() => onDelete(h.id)}>❌</button>
    </div>
  ));
}
