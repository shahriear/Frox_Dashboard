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
    <div className="bg-white shadow rounded-xl p-6 mt-4">
      {/* Top Title */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold">Revenue</h3>

        <div className="flex gap-3 text-sm">
          <button className="px-3 py-1 rounded bg-indigo-100 text-indigo-600">
            All
          </button>
          <button className="px-3 py-1 rounded hover:bg-gray-100">Day</button>
          <button className="px-3 py-1 rounded hover:bg-gray-100">Month</button>
          <button className="px-3 py-1 rounded hover:bg-gray-100">Year</button>
        </div>
      </div>

      {/* Chart */}
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

      {/* Legend (Same as screenshot) */}
      <div className="flex gap-6 justify-center mt-4">
        <div className="flex items-center gap-2">
          <span
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: '#00C49F' }}
          ></span>
          <span className="text-gray-600 text-sm">Order</span>
        </div>

        <div className="flex items-center gap-2">
          <span
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: '#FF8042' }}
          ></span>
          <span className="text-gray-600 text-sm">Earnings</span>
        </div>

        <div className="flex items-center gap-2">
          <span
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: '#8884d8' }}
          ></span>
          <span className="text-gray-600 text-sm">Refunds</span>
        </div>
      </div>
    </div>
  );
}
