export default function Pagination() {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-4 mt-4 sm:mt-6">
      <div className="flex gap-1 sm:gap-2 overflow-x-auto pb-1">
        {[1, 2, 3, 4, 5].map(n => (
          <button
            key={n}
            className={`px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-lg font-medium transition-colors duration-300 whitespace-nowrap flex-shrink-0 ${
              n === 1
                ? 'bg-purple-600 text-white hover:bg-purple-700'
                : 'bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-slate-600 border border-gray-300 dark:border-slate-600'
            }`}
          >
            {n}
          </button>
        ))}
      </div>

      <button className="border border-gray-300 dark:border-gray-600 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-lg text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors duration-300 whitespace-nowrap">
        Next →
      </button>
    </div>
  );
}
