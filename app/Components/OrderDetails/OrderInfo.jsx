export default function OrderInfo() {
  return (
    <div className="p-5 border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-800 rounded-lg w-full transition-colors duration-300">
      <h3 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Order Info</h3>

      <p className="text-gray-700 dark:text-gray-300">Shipping: Next express</p>
      <p className="text-gray-700 dark:text-gray-300">Pay method: Paypal</p>
      <p className="text-gray-700 dark:text-gray-300">Status: Pending</p>

      <button className="mt-3 bg-gray-200 dark:bg-slate-600 text-gray-800 dark:text-gray-100 px-3 py-1 rounded transition-colors duration-300">
        Download info
      </button>
    </div>
  );
}
