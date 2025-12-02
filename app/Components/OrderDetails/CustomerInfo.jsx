export default function CustomerInfo() {
  return (
    <div className="p-3 sm:p-4 md:p-5 border border-gray-200 dark:border-slate-600 bg-[var(--card-bg)] rounded-lg w-full transition-colors duration-300">
      <h3 className="font-semibold mb-2 sm:mb-3 md:mb-4 text-base sm:text-lg md:text-xl text-gray-900 dark:text-gray-50">
        Customer
      </h3>

      <div className="space-y-1.5 sm:space-y-2 md:space-y-2.5">
        <p className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300">
          <strong className="font-semibold text-gray-900 dark:text-gray-100">
            Full name:
          </strong>{' '}
          <span>Jane Cooper</span>
        </p>
        <p className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300 break-all">
          <strong className="font-semibold text-gray-900 dark:text-gray-100">
            E-mail:
          </strong>{' '}
          <span className="break-all">tim.jennings@example.com</span>
        </p>
        <p className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300">
          <strong className="font-semibold text-gray-900 dark:text-gray-100">
            Phone:
          </strong>{' '}
          <span>+099 856 245</span>
        </p>
      </div>

      <button className="mt-3 sm:mt-4 md:mt-5 w-full sm:w-auto bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded transition-colors duration-300 text-xs sm:text-sm font-medium">
        View Profile
      </button>
    </div>
  );
}
