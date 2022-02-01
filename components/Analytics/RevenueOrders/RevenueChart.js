
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Jan",
    Orders: 150,
    Revenue: 100,
  },
  {
    name: "Feb",
    Orders: 120,
    Revenue: 100,
  },
  {
    name: "Mar",
    Orders: 180,
    Revenue: 200,
  },
  {
    name: "Apr",
    Orders: 150,
    Revenue: 310,
  },
  {
    name: "May",
    Orders: 210,
    Revenue: 290,
  },
  {
    name: "Jun",
    Orders: 150,
    Revenue: 250,
  },
  {
    name: "Jul",
    Orders: 120,
    Revenue: 210,
  },
  {
    name: "Aug",
    Orders: 130,
    Revenue: 160,
  },
  {
    name: "Sep",
    Orders: 100,
    Revenue: 100,
  },
  {
    name: "Oct",
    Orders: 100,
    Revenue: 100,
  },
  {
    name: "Nov",
    Orders: 150,
    Revenue: 200,
  },
  {
    name: "Dec",
    Orders: 150,
    Revenue: 200,
  },
];

export default function RevenueChart() {
  return (
    <ResponsiveContainer width="100%" height={342}>
      <LineChart data={data}
        margin={{
          top: 5,
          right: 20,
          left: 0,
          bottom: 25
        }}
      >
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis dataKey="name" axisLine={false} tickLine={false} tickMargin={15} />
        <YAxis domain={[0, 400]} axisLine={false} tickLine={false} tickMargin={15} />
        <Tooltip />
        <Line type="monotone" dataKey="Revenue" stroke="#5542F6" dot={false} activeDot={{ r: 8 }} strokeWidth={3} />
        <Line type="monotone" dataKey="Orders" stroke="#20C9AC" strokeWidth={3} dot={false} activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}
