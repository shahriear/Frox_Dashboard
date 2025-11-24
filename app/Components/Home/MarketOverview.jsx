// export default function MarketOverview() {
// return (
// <div className="bg-white shadow rounded-xl p-4 h-64">
// <h2 className="font-semibold mb-4">Market Overview</h2>
// <div className="w-full h-40 bg-gray-100 rounded-xl" />
// </div>
// );
// }

"use client";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 650 },
  { name: "Mar", value: 500 },
  { name: "Apr", value: 900 },
  { name: "May", value: 750 },
  { name: "Jun", value: 1100 },
];

export default function MarketOverview() {
  return (
    <div className="bg-white shadow-2xl rounded-xl p-4 h-64">
      <h2 className="font-semibold mb-4">Market Overview</h2>

      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" className="opacity-40" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#4F46E5" strokeWidth={3} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
