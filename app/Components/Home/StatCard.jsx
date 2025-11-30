export default function StatCard({ title, amount, percent }) {
return (
  <div className="bg-[var(--card-bg)]  shadow rounded-xl p-4 transition-colors duration-300">
    <div className="text-gray-00 dark:text-gray-00 text-sm">{title}</div>
    <div className="text-2xl font-semibold mt-1 dark:text-whit">{amount}</div>
    <div className="text-green-500 dark:text-green-400 text-sm">+{percent}</div>
  </div>
);
}
