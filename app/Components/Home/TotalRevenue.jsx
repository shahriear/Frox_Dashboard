// "use client";
// import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

// const data = [
//   { name: "Mon", revenue: 240 },
//   { name: "Tue", revenue: 390 },
//   { name: "Wed", revenue: 320 },
//   { name: "Thu", revenue: 450 },
//   { name: "Fri", revenue: 600 },
//   { name: "Sat", revenue: 700 },
//   { name: "Sun", revenue: 500 },
// ];

// export default function TotalRevenue() {
//   return (
//     <div className="bg-white -z-10 shadow-2xl rounded-xl p-4 h-64">
//       <h2 className="font-semibold mb-4">Total Revenue</h2>

//       <ResponsiveContainer width="100%" height="80%">
//         <BarChart data={data}>
//           <CartesianGrid strokeDasharray="3 3" className="opacity-40" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Bar dataKey="revenue" fill="#10B981" radius={[6, 6, 0, 0]} />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }

'use client';
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Mon', revenue: 240 },
  { name: 'Tue', revenue: 390 },
  { name: 'Wed', revenue: 320 },
  { name: 'Thu', revenue: 450 },
  { name: 'Fri', revenue: 600 },
  { name: 'Sat', revenue: 700 },
  { name: 'Sun', revenue: 500 },
];

export default function TotalRevenue() {
  return (
    <div className="bg-[var(--card-bg)] shadow-lg rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 h-64 sm:h-80 md:h-96 min-h-[280px] transition-colors duration-300">
      <h2 className="font-semibold text-sm sm:text-base md:text-lg mb-3 sm:mb-4 dark:text-white">
        Total Revenue
      </h2>

      {/* Responsive height wrapper */}
      <div className="w-full h-[calc(100%-50px)] sm:h-[calc(100%-60px)]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 5, right: 10, left: -20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" className="opacity-40" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />

            <Bar dataKey="revenue" fill="#10B981" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
