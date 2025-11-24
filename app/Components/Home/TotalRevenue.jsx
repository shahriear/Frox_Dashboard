// export default function TotalRevenue() {
// return (
// <div className="bg-white shadow rounded-xl p-4 h-64">
// <h2 className="font-semibold mb-4">Total Revenue</h2>
// <div className="w-full h-40 bg-gray-100 rounded-xl" />
// </div>
// );
// }
"use client";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mon", revenue: 240 },
  { name: "Tue", revenue: 390 },
  { name: "Wed", revenue: 320 },
  { name: "Thu", revenue: 450 },
  { name: "Fri", revenue: 600 },
  { name: "Sat", revenue: 700 },
  { name: "Sun", revenue: 500 },
];

export default function TotalRevenue() {
  return (
    <div className="bg-white shadow-2xl rounded-xl p-4 h-64">
      <h2 className="font-semibold mb-4">Total Revenue</h2>

      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" className="opacity-40" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="revenue" fill="#10B981" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
