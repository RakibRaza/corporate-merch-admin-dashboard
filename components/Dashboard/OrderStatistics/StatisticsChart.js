import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Jan",
    pv: 3700,
  },
  {
    name: "Fab",
    pv: 4100,
  },
  {
    name: "Mar",
    pv: 4500,
  },
  {
    name: "Apr",
    pv: 3200,
  },
  {
    name: "May",
    pv: 2800,
  },
  {
    name: "Jun",
    pv: 3900,
  },
  {
    name: "Jul",
    pv: 3200,
  }
];

const DataFormater = (number) => {
  return (number / 1000).toString() + 'K';
}
export default function StatisticsChart() {
  return (
    <ResponsiveContainer width="100%" height={203}>
      <BarChart data={data} margin={{
        top: 5,
        right: 30,
        left: 0,
        bottom: 0
      }}>
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis tickMargin={10} dataKey="name" axisLine={false} tickLine={false} />
        <YAxis tickMargin={10} tickCount={6} domain={[0, 5000]} tickFormatter={DataFormater} axisLine={false} tickLine={false} />
        <Bar barSize={26} dataKey="pv" fill="#55B4E4" radius={[10, 10, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
