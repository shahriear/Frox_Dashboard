export default function StatCard({ title, amount, percent }) {
  return (
    <div className="bg-white dark:bg-gradient-to-r from-[#2b3f64] via-[#2b3f64] to-[#2b3f64] shadow-2xl rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 transition-colors duration-300 hover:shadow-md">
      <div className="dark:text-blac text-xs sm:text-sm md:text-base font-medium">
        {title}
      </div>
      <div className="text-xl dark:text-blac sm:text-2xl md:text-3xl font-bold mt-2 sm:mt-3 ">
        {amount}
      </div>
      <div className="text-green-500 dark:text-green-400 text-xs sm:text-sm md:text-base font-semibold mt-1 sm:mt-2">
        +{percent}
      </div>
    </div>
  );
}
