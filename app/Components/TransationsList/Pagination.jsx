export default function Pagination() {
  return (
    <div className="flex items-center gap-2 sm:gap-3 my-4 sm:my-6 overflow-x-auto">
      <button className="px-2.5 sm:px-4 py-1.5 sm:py-2 bg-purple-600 text-white text-xs sm:text-sm rounded-lg hover:bg-purple-700 transition-colors duration-300 font-medium whitespace-nowrap flex-shrink-0">
        1
      </button>
      <button className="px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-xs sm:text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300 whitespace-nowrap flex-shrink-0">
        2
      </button>
      <button className="px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-xs sm:text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300 whitespace-nowrap flex-shrink-0">
        3
      </button>
      <button className="px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-xs sm:text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300 whitespace-nowrap flex-shrink-0">
        4
      </button>
      <button className="px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-xs sm:text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300 whitespace-nowrap flex-shrink-0 font-medium">
        Next →
      </button>
    </div>
  );
}
