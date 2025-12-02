'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const data = [
  { month: 'Jan', Completed: 40, Pending: 20, Unpaid: 10, Delivered: 30 },
  { month: 'Feb', Completed: 50, Pending: 10, Unpaid: 20, Delivered: 40 },
  { month: 'Mar', Completed: 70, Pending: 30, Unpaid: 15, Delivered: 60 },
  { month: 'Apr', Completed: 60, Pending: 25, Unpaid: 20, Delivered: 55 },
  { month: 'May', Completed: 90, Pending: 35, Unpaid: 30, Delivered: 70 },
  { month: 'Jun', Completed: 80, Pending: 40, Unpaid: 15, Delivered: 65 },
  { month: 'Jul', Completed: 75, Pending: 20, Unpaid: 25, Delivered: 60 },
  { month: 'Aug', Completed: 65, Pending: 15, Unpaid: 30, Delivered: 55 },
  { month: 'Sep', Completed: 85, Pending: 25, Unpaid: 20, Delivered: 75 },
  { month: 'Oct', Completed: 70, Pending: 30, Unpaid: 25, Delivered: 60 },
  { month: 'Nov', Completed: 95, Pending: 40, Unpaid: 35, Delivered: 80 },
  { month: 'Dec', Completed: 100, Pending: 50, Unpaid: 40, Delivered: 90 },
];

export default function SalesPerformance() {
  return (
    <div className="bg-[var(--card-bg)] shadow rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 col-span-1 sm:col-span-2 h-64 sm:h-80 md:h-96 min-h-[300px] transition-colors duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 sm:mb-4 gap-2">
        <h2 className="font-semibold text-sm sm:text-base md:text-lg ">
          Sales Performance
        </h2>

        <div className="flex gap-2 sm:gap-3 text-xs sm:text-sm ">
          <span className="cursor-pointer hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
            Today's
          </span>
          <span className="cursor-pointer text-gray-500  font-semibold">
            Monthly
          </span>
        </div>
      </div>

      {/* Chart Container */}
      <div className="w-full h-[calc(100%-50px)] sm:h-[calc(100%-60px)]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 10, left: -20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" className="opacity-50" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Legend wrapperStyle={{ fontSize: '12px' }} />

            <Line
              type="monotone"
              dataKey="Completed"
              stroke="#E0A8A8"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="Pending"
              stroke="#845EC2"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="Unpaid"
              stroke="#FFC75F"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="Delivered"
              stroke="#4D96FF"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
