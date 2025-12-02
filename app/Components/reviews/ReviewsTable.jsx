import ReviewRow from './ReviewRow';

export default function ReviewsTable({ reviews }) {
  return (
    <div className="bg-white dark:bg-slate-800 shadow-lg rounded-lg p-3 sm:p-4 md:p-6 transition-colors duration-300 overflow-x-auto table-container">
      <table className="w-full text-left transition-colors duration-300 min-w-max">
        <thead>
          <tr className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 border-b border-gray-300 dark:border-slate-700 transition-colors duration-300 bg-gray-50 dark:bg-slate-700">
            <th className="px-2 sm:px-3 md:px-4 py-2 sm:py-3">
              <input type="checkbox" className="w-4 h-4" />
            </th>
            <th className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 font-semibold">
              Customer
            </th>
            <th className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 font-semibold hidden sm:table-cell">
              Comment
            </th>
            <th className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 font-semibold hidden sm:table-cell">
              Rating
            </th>
            <th className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 font-semibold hidden md:table-cell">
              Date
            </th>
            <th className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 font-semibold text-right">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {reviews && reviews.length > 0 ? (
            reviews.map(review => <ReviewRow key={review.id} review={review} />)
          ) : (
            <tr>
              <td
                colSpan={6}
                className="px-2 sm:px-3 md:px-4 py-8 text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400"
              >
                No reviews found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
