export default function OrderInfo() {
  return (
    <div className="p-5 border border-gray-200 dark:border-slate-600  rounded-lg w-full transition-colors duration-300 bg-[var(--card-bg)]">
      <h3 className="font-semibold mb-3 ">Order Info</h3>

      <p className="">Shipping: Next express</p>
      <p className="">Pay method: Paypal</p>
      <p className="">Status: Pending</p>

      <button className="mt-3 bg-gray-200 dark:bg-slate-600 text-gray-800 dark:text-gray-100 px-3 py-1 rounded transition-colors duration-300">
        Download info
      </button>
    </div>
  );
}
