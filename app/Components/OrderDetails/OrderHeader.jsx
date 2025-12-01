"use client";
import { Calendar } from "lucide-react";

export default function OrderHeader() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold  transition-colors duration-300">
            Orders ID: #68543
          </h2>
          <div className="flex items-center gap-2  mt-1 transition-colors duration-300">
            <Calendar size={18} />
            <span>Mon, Jan 28, 2022, 8:40AM</span>
          </div>
          <p className="text-green-500 dark:text-green-400 font-medium mt-1 transition-colors duration-300">
            Pending
          </p>
        </div>

        <div className="flex gap-3">
          <select className="border border-gray-300 dark:border-slate-600 bg-[var(--card-bg)] px-3 py-2 rounded-md transition-colors duration-300">
            <option>Change Status</option>
          </select>
          <button className="bg-blue-600 dark:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-300">
            Save
          </button>
          <button className="border border-gray-300 dark:border-slate-600 bg-[var(--card-bg)] dark:text-white px-3 py-2 rounded-md transition-colors duration-300">
            🖨️
          </button>
        </div>
      </div>
    </div>
  );
}
