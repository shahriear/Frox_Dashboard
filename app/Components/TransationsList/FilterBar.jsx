'use client';

export default function FilterBar() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-3 sm:gap-4 bg-white dark:bg-slate-800 p-3 sm:p-4 md:p-5 rounded-lg shadow-sm mb-4 sm:mb-6 transition-colors duration-300">
      {/* Category Select */}
      <select className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white p-2 sm:p-2.5 rounded-md text-xs sm:text-sm transition-colors duration-300 min-w-max">
        <option>All Category</option>
        <option>Completed</option>
        <option>Pending</option>
      </select>

      {/* Date and Status - Stack on mobile, row on tablet+ */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 flex-1 sm:flex-none min-w-0">
        <input
          type="date"
          className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white p-2 sm:p-2.5 rounded-md text-xs sm:text-sm transition-colors duration-300 min-w-max"
        />

        <select className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white p-2 sm:p-2.5 rounded-md text-xs sm:text-sm transition-colors duration-300 min-w-max">
          <option>Status</option>
          <option>Pending</option>
          <option>Completed</option>
          <option>Cancelled</option>
        </select>

        <button className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-slate-600 px-3 sm:px-4 py-2 sm:py-2.5 rounded-md text-xs sm:text-sm transition-colors duration-300 min-w-max font-medium">
          Filters
        </button>
      </div>

      {/* Date Range - Right aligned on desktop, full width on mobile */}
      <div className="ml-auto text-gray-600 dark:text-gray-400 transition-colors duration-300 text-xs sm:text-sm whitespace-nowrap">
        <span>Feb 15, 2022 – Feb 21, 2022</span>
      </div>
    </div>
  );
}
