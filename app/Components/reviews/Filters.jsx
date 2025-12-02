export default function Filters() {
  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-3 md:gap-4 bg-white dark:bg-slate-800 shadow-lg p-3 sm:p-4 md:p-5 rounded-lg mb-4 sm:mb-6 transition-colors duration-300">
      <select className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white p-2 sm:p-2.5 rounded-lg text-xs sm:text-sm w-full sm:w-40 md:w-44 transition-colors duration-300">
        <option>All Category</option>
      </select>

      <input
        type="date"
        className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white p-2 sm:p-2.5 rounded-lg text-xs sm:text-sm transition-colors duration-300 whitespace-nowrap"
        defaultValue="2021-02-10"
      />

      <select className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white p-2 sm:p-2.5 rounded-lg text-xs sm:text-sm w-full sm:w-40 md:w-44 transition-colors duration-300">
        <option>Status</option>
      </select>

      <button className="sm:ml-auto border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors duration-300 whitespace-nowrap flex-shrink-0">
        Filters
      </button>
    </div>
  );
}
