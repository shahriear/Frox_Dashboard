'use client';

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { month: '01', order: 120, earnings: 200, refunds: 100 },
  { month: '02', order: 280, earnings: 150, refunds: 230 },
  { month: '03', order: 140, earnings: 220, refunds: 310 },
  { month: '04', order: 220, earnings: 300, refunds: 170 },
  { month: '05', order: 100, earnings: 160, refunds: 250 },
  { month: '06', order: 250, earnings: 110, refunds: 280 },
  { month: '07', order: 280, earnings: 330, refunds: 190 },
  { month: '08', order: 160, earnings: 190, refunds: 170 },
  { month: '09', order: 340, earnings: 160, refunds: 250 },
  { month: '10', order: 100, earnings: 340, refunds: 200 },
  { month: '11', order: 260, earnings: 290, refunds: 370 },
  { month: '12', order: 120, earnings: 260, refunds: 240 },
];

export default function ReviewsChart() {
  return (
    <div className="bg-white dark:bg-slate-800 shadow-lg rounded-xl p-3 sm:p-4 md:p-6 mt-4 sm:mt-6 transition-colors duration-300">
      {/* Top Title */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
        <h3 className="text-lg sm:text-xl md:text-2xl text-gray-900 dark:text-white font-bold transition-colors duration-300">
          Revenue
        </h3>

        <div className="flex gap-2 sm:gap-3 text-xs sm:text-sm transition-colors duration-300 overflow-x-auto">
          <button className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-300 font-medium whitespace-nowrap flex-shrink-0 transition-colors duration-300">
            All
          </button>
          <button className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 text-gray-900 dark:text-white dark:bg-slate-700 whitespace-nowrap flex-shrink-0 transition-colors duration-300">
            Day
          </button>
          <button className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 text-gray-900 dark:text-white dark:bg-slate-700 whitespace-nowrap flex-shrink-0 transition-colors duration-300">
            Month
          </button>
          <button className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 text-gray-900 dark:text-white dark:bg-slate-700 whitespace-nowrap flex-shrink-0 transition-colors duration-300">
            Year
          </button>
        </div>
      </div>

      {/* Chart */}
      <div className="w-full h-48 sm:h-64 md:h-80 overflow-x-auto">
        <ResponsiveContainer width="100%" height={320}>
          <LineChart
            data={data}
            margin={{ top: 20, right: 20, left: 0, bottom: 30 }}
          >
            <CartesianGrid stroke="#f0f0f0" strokeDasharray="3 3" />

            <XAxis
              dataKey="month"
              tick={{ fill: '#9ca3af', fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              cursor={{ stroke: '#ddd', strokeWidth: 1 }}
              contentStyle={{
                borderRadius: '10px',
                border: '1px solid #eee',
                padding: '10px',
              }}
            />

            {/* Lines */}
            <Line
              type="monotone"
              dataKey="order"
              stroke="#00C49F"
              strokeWidth={3}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="earnings"
              stroke="#FF8042"
              strokeWidth={3}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="refunds"
              stroke="#8884d8"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 justify-center mt-4 sm:mt-6">
        <div className="flex items-center gap-2">
          <span
            className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full flex-shrink-0"
            style={{ backgroundColor: '#00C49F' }}
          ></span>
          <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300 whitespace-nowrap">
            Order
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span
            className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full flex-shrink-0"
            style={{ backgroundColor: '#FF8042' }}
          ></span>
          <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300 whitespace-nowrap">
            Earnings
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span
            className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full flex-shrink-0"
            style={{ backgroundColor: '#8884d8' }}
          ></span>
          <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300 whitespace-nowrap">
            Refunds
          </span>
        </div>
      </div>
    </div>
  );
}
