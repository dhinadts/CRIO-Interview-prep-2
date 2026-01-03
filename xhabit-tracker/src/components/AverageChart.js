
import { PieChart, Pie, Cell } from "recharts";

export default function AverageChart({ habits }) {
  const counts = { reading: 0, exercise: 0, meditation: 0 };
  habits.forEach(h =>
    Object.keys(h.habits).forEach(k => h.habits[k] && counts[k]++)
  );

  const data = Object.keys(counts).map(k => ({
    name: k,
    value: counts[k],
  }));

  return (
    <div>
      <h2>Average Completions</h2>
      <PieChart width={200} height={200}>
        <Pie data={data} dataKey="value" label>
          {data.map((_, i) => (
            <Cell key={i} fill={["purple", "orange", "gold"][i]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
}
