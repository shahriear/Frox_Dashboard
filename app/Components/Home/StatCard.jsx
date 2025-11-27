export default function StatCard({ title, amount, percent }) {
return (
<div className="bg-white dark:bg-slate-800 shadow dark:shadow-lg rounded-xl p-4 transition-colors duration-300">
<div className="text-gray-500 dark:text-gray-400 text-sm transition-colors duration-300">{title}</div>
<div className="text-2xl font-semibold mt-1 dark:text-gray-100 transition-colors duration-300">{amount}</div>
<div className="text-green-500 text-sm">+{percent}</div>
</div>
);
}
