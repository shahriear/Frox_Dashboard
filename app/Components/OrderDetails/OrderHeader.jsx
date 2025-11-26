"use client";
import { Calendar } from "lucide-react";

export default function OrderHeader() {
  return (
    <div >
      {/* <div className="py-7 bg-gray-300">
            <h2 className="text-2xl font-bold">Orders List</h2>
            <nav className="text-xs text-gray-400 mt-1">
              Home &gt; <span className="text-indigo-600">Order List</span>
            </nav>
          </div> */}
      <div className="flex justify-between items-center mb-6">
        <div>
        
        <h2 className="text-xl font-semibold">Orders ID: #68543</h2>
        <div className="flex items-center gap-2 text-gray-600 mt-1">
          <Calendar size={18} />
          <span>Mon, Jan 28, 2022, 8:40AM</span>
        </div>
        <p className="text-green-500 font-medium mt-1">Pending</p>
      </div>

      <div className="flex gap-3">
        <select className="border px-3 py-2 rounded-md">
          <option>Change Status</option>
        </select>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
          Save
        </button>
        <button className="border px-3 py-2 rounded-md">🖨️</button>
      </div>
      </div>
    </div>
  );
}
