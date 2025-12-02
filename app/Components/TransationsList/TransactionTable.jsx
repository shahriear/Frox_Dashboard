import TransactionRow from './TransactionRow';

export default function TransactionTable({ title, data }) {
  return (
    <div className="bg-white dark:bg-slate-800 p-3 sm:p-4 md:p-6 rounded-lg shadow-sm mb-6 sm:mb-8 md:mb-10 transition-colors duration-300">
      <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-4 text-gray-900 dark:text-white transition-colors duration-300">
        {title}
      </h2>

      {/* Responsive table container with horizontal scroll on mobile */}
      <div className="w-full overflow-x-auto table-container">
        <table className="w-full text-xs sm:text-sm text-left transition-colors duration-300 min-w-max">
          <thead className="bg-gray-50 dark:bg-slate-700 border-b border-gray-300 dark:border-slate-600 transition-colors duration-300">
            <tr className="transition-colors duration-300">
              <th className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                <input type="checkbox" className="w-4 h-4" />
              </th>
              <th className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 font-semibold text-gray-900 dark:text-white transition-colors duration-300 whitespace-nowrap">
                Order ID
              </th>
              <th className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 font-semibold text-gray-900 dark:text-white transition-colors duration-300 whitespace-nowrap">
                Paid
              </th>
              <th className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 font-semibold text-gray-900 dark:text-white transition-colors duration-300 whitespace-nowrap">
                Method
              </th>
              <th className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 font-semibold text-gray-900 dark:text-white transition-colors duration-300 whitespace-nowrap">
                Date
              </th>
              <th className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 font-semibold text-gray-900 dark:text-white transition-colors duration-300 whitespace-nowrap">
                Status
              </th>
              <th className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 font-semibold text-gray-900 dark:text-white transition-colors duration-300 text-right whitespace-nowrap">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-300 dark:divide-slate-600 transition-colors duration-300">
            {data && data.length > 0 ? (
              data.map((item, i) => <TransactionRow key={i} item={item} />)
            ) : (
              <tr>
                <td
                  colSpan={7}
                  className="px-2 sm:px-3 md:px-4 py-4 sm:py-6 text-center text-gray-500 dark:text-gray-400 transition-colors duration-300 text-xs sm:text-sm"
                >
                  No transactions found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
