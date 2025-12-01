export default function CustomerInfo() {
  return (
    <div className="p-5 border border-gray-200 dark:border-slate-600 bg-[var(--card-bg)] rounded-lg w-full transition-colors duration-300">
      <h3 className="font-semibold mb-3 ">
        Customer
      </h3>

      <p className="">
        <strong>Full name:</strong> Jane Cooper
      </p>
      <p className="">
        <strong>E-mail:</strong> tim.jennings@example.com
      </p>
      <p className="">
        <strong>Phone:</strong> +099 856 245
      </p>

      <button className="mt-3 bg-gray-200 dark:bg-slate-600 text-gray-800 dark:text-gray-100 px-3 py-1 rounded transition-colors duration-300">
        View Profile
      </button>
    </div>
  );
}
