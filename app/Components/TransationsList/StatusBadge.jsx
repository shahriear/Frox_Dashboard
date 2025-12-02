export default function StatusBadge({ status }) {
  const color = {
    Pending: 'bg-orange-500',
    Completed: 'bg-green-600',
    Cancelled: 'bg-red-500',
  }[status];

  return (
    <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">
      <span
        className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${color}`}
      ></span>
      <span className="text-xs sm:text-sm text-gray-900 dark:text-gray-100 font-medium transition-colors duration-300 whitespace-nowrap">
        {status}
      </span>
    </div>
  );
}
