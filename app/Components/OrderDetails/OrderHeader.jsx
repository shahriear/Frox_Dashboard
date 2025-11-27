"use client";
import { Calendar } from "lucide-react";

export default function OrderHeader() {
  return (
    <div >
      {/* <div className="py-7 bg-gray-300 dark:bg-slate-500 transition-colors duration-300">
            <h2 className="text-2xl font-bold transition-colors duration-300">Orders List</h2>
            <nav className="text-xs text-gray-400 dark:text-gray-500 dark:text-gray-400 mt-1 transition-colors duration-300">
              Home &gt; <span className="text-indigo-600 transition-colors duration-300">Order List</span>
            </nav>
          </div> */}
      <div className="flex justify-between items-center mb-6">
        <div>
        
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 transition-colors duration-300">Orders ID: #68543</h2>
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mt-1 transition-colors duration-300">
          <Calendar size={18} />
          <span>Mon, Jan 28, 2022, 8:40AM</span>
        </div>
        <p className="text-green-500 dark:text-green-400 font-medium mt-1 transition-colors duration-300">Pending</p>
      </div>

      <div className="flex gap-3">
        <select className="border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white px-3 py-2 rounded-md transition-colors duration-300">
          <option>Change Status</option>
        </select>
        <button className="bg-blue-600 dark:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-300">
          Save
        </button>
        <button className="border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white px-3 py-2 rounded-md transition-colors duration-300">🖨️</button>
      </div>
      </div>
    </div>
  );
}
