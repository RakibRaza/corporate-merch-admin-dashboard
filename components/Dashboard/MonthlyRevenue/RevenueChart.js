
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Dec 10",
    pv: 15,
  },
  {
    name: "Dec 14",
    pv: 30,
  },
  {
    name: "Dec 18",
    pv: 70,
  },
  {
    name: "Dec 22",
    pv: 60,
  },
  {
    name: "Dec 26",
    pv: 50,
  },
  {
    name: "Dec 30",
    pv: 70,
  },
  {
    name: "Jan 3",
    pv: 40,
  },
  {
    name: "Jan 7",
    pv: 65,
  }
];

export default function RevenueChart() {
  return (
    <ResponsiveContainer width="100%" height={203}>
      <LineChart data={data} margin={{ top: 5, right: 30, left: -20, bottom: 5 }}>
        <CartesianGrid horizontal={false} strokeDasharray="3 3" />
        <XAxis dataKey="name" axisLine={false} tickLine={false} />
        <YAxis axisLine={false} tickLine={false} tick={false} />
        <Line type="basis" dataKey="pv" dot={false} strokeWidth={5} stroke="#55B4E4" />
      </LineChart>
    </ResponsiveContainer>
  );
}
