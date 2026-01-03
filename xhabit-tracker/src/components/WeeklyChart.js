
import { BarChart, Bar, XAxis, YAxis } from "recharts";

export default function WeeklyChart({ habits }) {
  const weekAgo = new Date();
  weekAgo.setDate(weekAgo.getDate() - 7);

  const counts = { Reading: 0, Exercise: 0, Meditation: 0 };

  habits.filter(h => new Date(h.date) >= weekAgo).forEach(h => {
    if (h.habits.reading) counts.Reading++;
    if (h.habits.exercise) counts.Exercise++;
    if (h.habits.meditation) counts.Meditation++;
  });

  const data = Object.keys(counts).map(k => ({ name: k, value: counts[k] }));

  return (
    <div id="bar-chart">
      <h2>Top Habits (Last Week)</h2>
      <BarChart width={250} height={200} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="value" />
      </BarChart>
    </div>
  );
}
