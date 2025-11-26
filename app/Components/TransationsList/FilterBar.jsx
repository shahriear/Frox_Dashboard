"use client";

export default function FilterBar() {
  return (
    <div className="flex items-center flex-wrap gap-4 bg-white p-4 rounded-lg shadow-sm mb-6">
      
      <select className="border p-2 rounded-md min-w-[150px]">
        <option>All Category</option>
        <option>Completed</option>
        <option>Pending</option>
      </select>

      <div>
        <input 
        type="date"
        className="border p-2 rounded-md"
      />

      <select className="border p-2 rounded-md">
        <option>Status</option>
        <option>Pending</option>
        <option>Completed</option>
        <option>Cancelled</option>
      </select>

      <button className="border px-4 py-2 rounded-md">
        Filters
      </button>
      </div>

      <div className="ml-auto text-gray-600">
        <span>📅 Feb 15, 2022 – Feb 21, 2022</span>
      </div>
    </div>
  );
}
