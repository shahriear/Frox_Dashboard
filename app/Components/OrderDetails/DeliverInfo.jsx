export default function DeliverInfo() {
  return (
    <div className="p-5 border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-800 rounded-lg w-full transition-colors duration-300">
      <h3 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Deliver to</h3>

      <p className="text-gray-700 dark:text-gray-300">Address: Santa Ana, Illinois 85486</p>
      <p className="text-gray-700 dark:text-gray-300">2972 Westheimer Rd.</p>
      <p className="text-gray-700 dark:text-gray-300">Block 9A</p>

      <button className="mt-3 bg-gray-200 dark:bg-slate-600 text-gray-800 dark:text-gray-100 px-3 py-1 rounded transition-colors duration-300">
        View Profile
      </button>
    </div>
  );
}
