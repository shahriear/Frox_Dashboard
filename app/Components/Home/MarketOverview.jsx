'use client';

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 650 },
  { name: 'Mar', value: 500 },
  { name: 'Apr', value: 900 },
  { name: 'May', value: 750 },
  { name: 'Jun', value: 1100 },
];

export default function MarketOverview() {
  return (
    <div className="bg-[var(--card-bg)] shadow-lg rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 h-64 sm:h-80 md:h-96 min-h-[280px] transition-colors duration-300">
      <h2 className="font-semibold text-sm sm:text-base md:text-lg mb-3 sm:mb-4 dark:text-white">
        Market Overview
      </h2>

      {/* Responsive height wrapper */}
      <div className="w-full h-[calc(100%-50px)] sm:h-[calc(100%-60px)]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 10, left: -20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" className="opacity-40" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#4F46E5"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
