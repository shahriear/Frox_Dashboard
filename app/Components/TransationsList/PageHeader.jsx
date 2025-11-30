export default function PageHeader() {
  return (
    <div className="mb-5">
      <h1 className="text-2xl font-semibold transition-colors duration-300">Transactions List</h1>
      <p className="text-sm text-gray-00 dark:text-gray-00 flex items-center gap-2 mt-1 transition-colors duration-300">
        <span> Home</span> / <span className="text-blue-500 font-semibold transition-colors duration-300">Order List</span>
      </p>
    </div>
  );
}
