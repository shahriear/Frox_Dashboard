"use client";

import { 
  LineChart, Line, XAxis, YAxis, Tooltip, 
  CartesianGrid, ResponsiveContainer, Legend 
} from "recharts";

const data = [
  { month: "Jan", Completed: 40, Pending: 20, Unpaid: 10, Delivered: 30 },
  { month: "Feb", Completed: 50, Pending: 10, Unpaid: 20, Delivered: 40 },
  { month: "Mar", Completed: 70, Pending: 30, Unpaid: 15, Delivered: 60 },
  { month: "Apr", Completed: 60, Pending: 25, Unpaid: 20, Delivered: 55 },
  { month: "May", Completed: 90, Pending: 35, Unpaid: 30, Delivered: 70 },
  { month: "Jun", Completed: 80, Pending: 40, Unpaid: 15, Delivered: 65 },
  { month: "Jul", Completed: 75, Pending: 20, Unpaid: 25, Delivered: 60 },
  { month: "Aug", Completed: 65, Pending: 15, Unpaid: 30, Delivered: 55 },
  { month: "Sep", Completed: 85, Pending: 25, Unpaid: 20, Delivered: 75 },
  { month: "Oct", Completed: 70, Pending: 30, Unpaid: 25, Delivered: 60 },
  { month: "Nov", Completed: 95, Pending: 40, Unpaid: 35, Delivered: 80 },
  { month: "Dec", Completed: 100, Pending: 50, Unpaid: 40, Delivered: 90 },
];

export default function SalesPerformance() {
  return (
    <div className="bg-white shadow rounded-xl p-4 col-span-2 h-80 -z-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold">Sales Performance</h2>
        <div className="flex gap-3 text-sm text-gray-500">
          <span className="cursor-pointer hover:text-gray-700">Today’s</span>
          <span className="cursor-pointer text-gray-800 font-semibold">Monthly</span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Line type="monotone" dataKey="Completed" stroke="#FF6B6B" strokeWidth={3} />
          <Line type="monotone" dataKey="Pending" stroke="#845EC2" strokeWidth={3} />
          <Line type="monotone" dataKey="Unpaid" stroke="#FFC75F" strokeWidth={3} />
          <Line type="monotone" dataKey="Delivered" stroke="#4D96FF" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
