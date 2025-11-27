// "use client";
// import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

// const data = [
//   { name: "Google", value: 450 },
//   { name: "Facebook", value: 320 },
//   { name: "Direct", value: 200 },
//   { name: "Email", value: 150 },
// ];

// const COLORS = ["#4F46E5", "#06B6D4", "#10B981", "#F59E0B"];

// export default function VisitsBySource() {
//   return (
//     <div className="bg-white -z-10 shadow-2xl rounded-xl p-4 h-64">
//       <h2 className="font-semibold mb-4">Visits by Source</h2>

//       <ResponsiveContainer width="100%" height="80%">
//         <PieChart>
//           <Pie
//             data={data}
//             cx="50%"
//             cy="50%"
//             innerRadius={40}
//             outerRadius={70}
//             paddingAngle={4}
//             dataKey="value"
//           >
//             {data.map((_, index) => (
//               <Cell key={index} fill={COLORS[index]} />
              
//             ))}
//           </Pie>

//           <Tooltip />
//           <Legend />
//         </PieChart>
//       </ResponsiveContainer>
      
//     </div>
//   );
// }

"use client";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Google", value: 450 },
  { name: "Facebook", value: 320 },
  { name: "Direct", value: 200 },
  { name: "Email", value: 150 },
];

const COLORS = ["#4F46E5", "#06B6D4", "#10B981", "#F59E0B"];

export default function VisitsBySource() {
  return (
    <div className="bg-white dark:bg-slate-800 shadow-2xl dark:shadow-2xl rounded-xl p-4 h-72 min-h-[280px] transition-colors duration-300">
      <h2 className="font-semibold mb-4">Visits by Source</h2>

      {/* FIX: Wrapper with fixed height so responsive container works */}
      <div className="w-full h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={70}
              paddingAngle={4}
              dataKey="value"
            >
              {data.map((_, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>

            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
