export default function PageHeader() {
  return (
    <div className="mb-4 sm:mb-6">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
        Transactions List
      </h1>
      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2 mt-2 transition-colors duration-300">
        <span>Home</span> <span>/</span>{' '}
        <span className="text-blue-500 dark:text-blue-400 font-semibold transition-colors duration-300">
          Order List
        </span>
      </p>
    </div>
  );
}
