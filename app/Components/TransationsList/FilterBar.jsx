"use client";

export default function FilterBar() {
  return (
    <div className="flex  items-center flex-wrap gap-4 bg-whit dark:bg-slate-00 p-4 rounded-lg shadow-sm mb-6 transition-colors duration-300">
      <select className="border bg-[var(--card-bg)] p-2 rounded-md min-w-[150px]">
        <option>All Category</option>
        <option>Completed</option>
        <option>Pending</option>
      </select>

      <div className="flex gap-5 ">
        <input
          type="date"
          className="border bg-[var(--card-bg)] p-2 rounded-md"
        />

        <select className="border bg-[var(--card-bg)] p-2 rounded-md">
          <option>Status</option>
          <option>Pending</option>
          <option>Completed</option>
          <option>Cancelled</option>
        </select>

        <button className="border bg-[var(--card-bg)] px-4 py-2 rounded-md">
          Filters
        </button>
      </div>

      <div className="ml-auto  text-gray-00 dark:text-gray-00 transition-colors duration-300 shadow">
        <span> Feb 15, 2022 – Feb 21, 2022</span>
      </div>
    </div>
  );
}
