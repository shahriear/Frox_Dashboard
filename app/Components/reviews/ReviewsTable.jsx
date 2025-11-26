import ReviewRow from './ReviewRow';

export default function ReviewsTable({ reviews }) {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500 border-b border-gray-400">
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
