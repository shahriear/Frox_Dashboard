import ReviewRow from './ReviewRow';

export default function ReviewsTable({ reviews }) {
  return (
    <div className="bg-white dark:bg-slate-700 shadow rounded-lg p-4 transition-colors duration-300">
      <table className="w-full text-left transition-colors duration-300">
        <thead>
          <tr className="text-gray-500 dark:text-gray-400 border-b border-gray-400 dark:border-slate-500 transition-colors duration-300">
            <th className="py-3">
              <input type="checkbox" />
            </th>
            <th>Customer</th>
            <th>Comment</th>
            <th>Rating</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {reviews.map(review => (
            <ReviewRow key={review.id} review={review} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
